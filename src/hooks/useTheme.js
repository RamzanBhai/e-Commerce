import { useCallback, useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'theme'
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

const getStoredTheme = () => {
  if (typeof window === 'undefined') {
    return LIGHT_THEME
  }

  return window.localStorage.getItem(THEME_STORAGE_KEY) === DARK_THEME
    ? DARK_THEME
    : LIGHT_THEME
}

export const useTheme = () => {
  const [theme, setTheme] = useState(getStoredTheme)
  const isDark = theme === DARK_THEME

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    document.documentElement.classList.toggle('theme-dark', isDark)
  }, [isDark, theme])

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME,
    )
  }, [])

  return { isDark, toggleTheme }
}
