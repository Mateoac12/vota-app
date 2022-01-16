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
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState({
      ...state,
      [event.target.id]: event.target.value,
    })
  }

  return {
    state,
    handleChange,
    setLoadingSubmit,
    loadingSubmit,
  }
}
