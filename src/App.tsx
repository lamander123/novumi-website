import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { I18nProvider } from '@/lib/i18n'

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage').then(m => ({ default: m.HomePage })))
const ServicesPage = lazy(() => import('@/pages/ServicesPage').then(m => ({ default: m.ServicesPage })))
const AboutPage = lazy(() => import('@/pages/AboutPage').then(m => ({ default: m.AboutPage })))
const ContactPage = lazy(() => import('@/pages/ContactPage').then(m => ({ default: m.ContactPage })))

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent-500 border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
