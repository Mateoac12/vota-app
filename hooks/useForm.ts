import { useState } from 'react'

interface FormState {
  title: string
  date: string
  description: string
  code: string
}

const initialFormState = {
  title: '',
  date: '',
  description: '',
  code: '',
}

export const useForm = () => {
  const [state, setState] = useState<FormState>(initialFormState)
  const [lineError, setLineError] = useState<null | string>(null)
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    })
  }

  const handleCheckErrorForms = () => {
    const arrayOfFields = Object.entries(state).slice(0, 3)
    const error = arrayOfFields.find(([_, value]) => value.trim() === '')
    let hasError = false

    if (error) {
      setLineError(
        `El campo ${
          document.querySelector(`[for="${error[0]}"]`)?.innerHTML
        } es requerido`
      )
      return (hasError = true)
    }

    setLineError(null)
    return hasError
  }

  return {
    state,
    handleChange,
    setLoadingSubmit,
    loadingSubmit,
    handleCheckErrorForms,
    lineError,
  }
}
