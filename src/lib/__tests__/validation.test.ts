import { describe, it, expect } from 'vitest'
import {
  isValidEmail,
  sanitizeCRLF,
  truncate,
  sanitizeTextField,
  validateContactForm,
  MAX_LENGTHS,
} from '../validation'

describe('isValidEmail', () => {
  it('accepts valid email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true)
    expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
    expect(isValidEmail('user+tag@example.org')).toBe(true)
    expect(isValidEmail('valid@sub.domain.com')).toBe(true)
  })

  it('rejects invalid email addresses', () => {
    expect(isValidEmail('')).toBe(false)
    expect(isValidEmail('notanemail')).toBe(false)
    expect(isValidEmail('@nodomain.com')).toBe(false)
    expect(isValidEmail('noat.com')).toBe(false)
    expect(isValidEmail('spaces in@email.com')).toBe(false)
  })

  it('rejects emails exceeding max length', () => {
    const longEmail = 'a'.repeat(250) + '@b.com'
    expect(isValidEmail(longEmail)).toBe(false)
  })

  it('rejects non-string inputs', () => {
    expect(isValidEmail(null as unknown as string)).toBe(false)
    expect(isValidEmail(undefined as unknown as string)).toBe(false)
    expect(isValidEmail(123 as unknown as string)).toBe(false)
  })
})

describe('sanitizeCRLF', () => {
  it('removes carriage return characters', () => {
    expect(sanitizeCRLF('hello\rworld')).toBe('hello world')
  })

  it('removes newline characters', () => {
    expect(sanitizeCRLF('hello\nworld')).toBe('hello world')
  })

  it('removes CRLF sequences', () => {
    expect(sanitizeCRLF('hello\r\nworld')).toBe('hello  world')
  })

  it('handles multiple CRLF characters', () => {
    expect(sanitizeCRLF('a\r\nb\r\nc')).toBe('a  b  c')
  })

  it('returns empty string for non-string inputs', () => {
    expect(sanitizeCRLF(null as unknown as string)).toBe('')
    expect(sanitizeCRLF(undefined as unknown as string)).toBe('')
  })

  // SECURITY TEST: Header injection attempt
  it('prevents email header injection', () => {
    const maliciousInput = 'attacker@evil.com\r\nBcc: victim@target.com'
    const sanitized = sanitizeCRLF(maliciousInput)
    expect(sanitized).not.toContain('\r')
    expect(sanitized).not.toContain('\n')
    expect(sanitized).toBe('attacker@evil.com  Bcc: victim@target.com')
  })
})

describe('truncate', () => {
  it('truncates long strings', () => {
    expect(truncate('hello world', 5)).toBe('hello')
  })

  it('returns full string if under limit', () => {
    expect(truncate('hi', 100)).toBe('hi')
  })

  it('handles empty inputs', () => {
    expect(truncate('', 10)).toBe('')
    expect(truncate(null as unknown as string, 10)).toBe('')
  })
})

describe('sanitizeTextField', () => {
  it('sanitizes and truncates', () => {
    const input = 'hello\r\nworld this is a long string'
    const result = sanitizeTextField(input, 15)
    expect(result).toBe('hello  world th')
    expect(result).not.toContain('\r')
    expect(result).not.toContain('\n')
  })

  it('handles non-string inputs', () => {
    expect(sanitizeTextField(123, 10)).toBe('123')
    expect(sanitizeTextField(null, 10)).toBe('')
    expect(sanitizeTextField(undefined, 10)).toBe('')
  })
})

describe('validateContactForm', () => {
  const validInput = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+31612345678',
    company: 'ACME Corp',
    jobTitle: 'HR Manager',
    companySize: '11-50 employees',
    screeningsPerYear: '11-50 per year',
    interests: ['Background verification'],
    message: 'We need screening services.',
  }

  it('accepts valid input', () => {
    const result = validateContactForm(validInput)
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
    expect(result.data).not.toBeNull()
    expect(result.data?.name).toBe('John Doe')
    expect(result.data?.email).toBe('john@example.com')
  })

  it('requires name', () => {
    const result = validateContactForm({ ...validInput, name: '' })
    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Name is required')
  })

  it('requires email', () => {
    const result = validateContactForm({ ...validInput, email: '' })
    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Email is required')
  })

  it('validates email format', () => {
    const result = validateContactForm({ ...validInput, email: 'notvalid' })
    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Invalid email format')
  })

  // SECURITY TESTS

  it('sanitizes CRLF in all fields', () => {
    const maliciousInput = {
      name: 'John\r\nBcc: hacker@evil.com',
      email: 'john@example.com',
      message: 'Hello\r\n\r\nInjected content',
    }
    const result = validateContactForm(maliciousInput)
    expect(result.valid).toBe(true)
    expect(result.data?.name).not.toContain('\r')
    expect(result.data?.name).not.toContain('\n')
    expect(result.data?.message).not.toContain('\r')
    expect(result.data?.message).not.toContain('\n')
  })

  it('truncates oversized fields', () => {
    const longName = 'A'.repeat(500)
    const result = validateContactForm({ ...validInput, name: longName })
    expect(result.valid).toBe(true)
    expect(result.data?.name.length).toBe(MAX_LENGTHS.name)
  })

  it('limits interests array size', () => {
    const manyInterests = Array(50).fill('Interest')
    const result = validateContactForm({ ...validInput, interests: manyInterests })
    expect(result.valid).toBe(true)
    expect(result.data?.interests.length).toBeLessThanOrEqual(10)
  })

  it('filters invalid interests', () => {
    const mixedInterests = ['Valid', 123, null, undefined, 'Also Valid']
    const result = validateContactForm({ ...validInput, interests: mixedInterests })
    expect(result.valid).toBe(true)
    expect(result.data?.interests).toEqual(['Valid', 'Also Valid'])
  })

  it('handles completely invalid input gracefully', () => {
    const result = validateContactForm({})
    expect(result.valid).toBe(false)
    expect(result.errors.length).toBeGreaterThan(0)
  })

  // XSS prevention note: Not needed for email body (plain text)
  // but validation prevents header injection which is the main risk
})
