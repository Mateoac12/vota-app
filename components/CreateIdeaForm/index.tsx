import React, { useState } from 'react'
import { useForm } from 'hooks/useForm'
import { useCreateIdea } from 'hooks/useCreateIdea'
import { useRouter } from 'next/router'

interface Props {
  setOpen: (open: boolean) => void
}

export const CreateIdeaForm: React.FC<Props> = ({ setOpen }) => {
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)
  const { state, handleChange, handleCheckErrorForms, lineError } = useForm()
  const router = useRouter()
  const { handleSubmitIdea } = useCreateIdea()

  const handleCreateIdea = async (e: React.FormEvent) => {
    e.preventDefault()
    const hasErrors = handleCheckErrorForms()
    if (hasErrors) return

    setLoadingSubmit(true)
    await handleSubmitIdea(state)

    setLoadingSubmit(false)
    setOpen(false)
    router.push('/dashboard')
  }

  return (
    <>
      <h1 className='text-2xl font-bold'>Crear idea</h1>
      <hr className='my-2' />
      <form>
        <div className='my-4'>
          <label htmlFor='title' className='text-sm block text-slate-400'>
            Título
          </label>
          <input
            id='title'
            type='text'
            className='border px-2 py-1 rounded-md w-full'
            placeholder='Ir a pescar'
            value={state.title}
            onChange={handleChange}
          />
        </div>
        <div className='my-4'>
          <label htmlFor='date' className='text-sm block text-slate-400'>
            Fecha
          </label>
          <input
            id='date'
            type='datetime-local'
            className='border px-2 py-1 rounded-md w-full'
            value={state.date}
            onChange={handleChange}
          />
        </div>
        <div className='my-4'>
          <label htmlFor='description' className='text-sm block text-slate-400'>
            Descripción
          </label>
          <textarea
            id='description'
            placeholder='Nos juntamos en mi casa y salimos de ahi'
            className='border px-2 py-1 rounded-md w-full'
            value={state.description}
            onChange={handleChange}
          />
        </div>
        {lineError && (
          <p className='mb-4 text-red-900 bg-red-200 rounded-md px-2 py-1 text-sm'>
            {lineError}
          </p>
        )}
        <button
          className={`px-8 py-1 mb-4 bg-green-600 text-white rounded-full shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-200 transition-shadow ${
            loadingSubmit &&
            'opacity-60 hover:cursor-not-allowed hover:opacity-60 shadow-slate-600 hover:shadow-slate-600'
          }`}
          onClick={handleCreateIdea}
          disabled={loadingSubmit}
        >
          ¡Crear idea!
        </button>
      </form>
    </>
  )
}
