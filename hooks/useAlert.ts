import { useEffect, useState } from 'react'

export const useAlert = () => {
  const [alert, setAlert] = useState<null | string>(null)

  useEffect(() => {
    const timer = setTimeout(() => setAlert(null), 5000)

    return () => clearTimeout(timer)
  }, [alert])

  return {
    alert,
    setAlert,
  }
}
