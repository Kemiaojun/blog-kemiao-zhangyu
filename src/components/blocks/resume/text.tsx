'use client'
import Typed from 'typed.js'

import { useEffect, useRef } from 'react'

export const ResumeText = () => {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!ref.current) {
      return
    }
    const typed = new Typed(ref.current, {
      backDelay: 200,
      backSpeed: 100,
      cursorChar: '_',
      loop: true,
      strings: ['I am^100 克喵爱吃卤面 ^500', 'Hello ^1000', 'Everyone ^2000'],
      typeSpeed: 150,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return <span ref={ref}>克喵的介绍</span>
}
