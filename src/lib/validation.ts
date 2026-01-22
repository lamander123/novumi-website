/**
 * Input validation utilities for contact form
 * Security-focused validation to prevent injection attacks
 */

// Maximum field lengths to prevent DoS
export const MAX_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321
  phone: 30,
  company: 200,
  jobTitle: 100,
  companySize: 50,
  screeningsPerYear: 50,
  interest: 100,
  message: 5000,
} as const

// Email regex following RFC 5322 (simplified but secure)
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

// Characters that could be used for header injection
const CRLF_REGEX = /[\r\n]/g

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false
  if (email.length > MAX_LENGTHS.email) return false
  return EMAIL_REGEX.test(email)
}

/**
 * Sanitize string by removing CRLF characters (prevents header injection)
 */
export function sanitizeCRLF(input: string): string {
  if (!input || typeof input !== 'string') return ''
  return input.replace(CRLF_REGEX, ' ')
}

/**
 * Truncate string to max length
 */
export function truncate(input: string, maxLength: number): string {
  if (!input || typeof input !== 'string') return ''
  return input.slice(0, maxLength)
}

/**
 * Sanitize and validate a text field
 */
export function sanitizeTextField(input: unknown, maxLength: number): string {
  if (input === null || input === undefined) return ''
  const str = String(input)
  return truncate(sanitizeCRLF(str), maxLength)
}

/**
 * Validate and sanitize contact form data
 */
export interface ContactFormInput {
  name?: unknown
  email?: unknown
  phone?: unknown
  company?: unknown
  jobTitle?: unknown
  companySize?: unknown
  screeningsPerYear?: unknown
  interests?: unknown
  message?: unknown
}

export interface SanitizedContactForm {
  name: string
  email: string
  phone: string
  company: string
  jobTitle: string
  companySize: string
  screeningsPerYear: string
  interests: string[]
  message: string
}

export interface ValidationResult {
  valid: boolean
  errors: string[]
  data: SanitizedContactForm | null
}

export function validateContactForm(input: ContactFormInput): ValidationResult {
  const errors: string[] = []

  // Sanitize all fields
  const name = sanitizeTextField(input.name, MAX_LENGTHS.name)
  const email = sanitizeTextField(input.email, MAX_LENGTHS.email)
  const phone = sanitizeTextField(input.phone, MAX_LENGTHS.phone)
  const company = sanitizeTextField(input.company, MAX_LENGTHS.company)
  const jobTitle = sanitizeTextField(input.jobTitle, MAX_LENGTHS.jobTitle)
  const companySize = sanitizeTextField(input.companySize, MAX_LENGTHS.companySize)
  const screeningsPerYear = sanitizeTextField(input.screeningsPerYear, MAX_LENGTHS.screeningsPerYear)
  const message = sanitizeTextField(input.message, MAX_LENGTHS.message)

  // Validate interests array
  let interests: string[] = []
  if (Array.isArray(input.interests)) {
    interests = input.interests
      .slice(0, 10) // Max 10 interests
      .filter((i): i is string => typeof i === 'string')
      .map(i => sanitizeTextField(i, MAX_LENGTHS.interest))
      .filter(i => i.length > 0)
  }

  // Required field validation
  if (!name) {
    errors.push('Name is required')
  }

  if (!email) {
    errors.push('Email is required')
  } else if (!isValidEmail(email)) {
    errors.push('Invalid email format')
  }

  if (errors.length > 0) {
    return { valid: false, errors, data: null }
  }

  return {
    valid: true,
    errors: [],
    data: {
      name,
      email,
      phone,
      company,
      jobTitle,
      companySize,
      screeningsPerYear,
      interests,
      message,
    },
  }
}
