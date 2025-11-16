'use client'

import { useEffect, useState } from 'react'

export default function MobileWarningWrapper({ children }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (isMobile) {
    return (
      <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">⚠️ Desktop Only</h2>
        <p className="text-lg text-gray-300">
          This app is optimized for desktop screens. <br />
          Please open it on a larger device to use all features.
        </p>
      </div>
    )
  }

  return children
}
