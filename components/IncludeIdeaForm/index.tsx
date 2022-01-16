import { useForm } from 'hooks/useForm'
import { useState } from 'react'

export const IncludeIdeaForm: React.FC = () => {
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)
  const { state, handleChange } = useForm()

  const handleIncludeIdea = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <>
      <h1 className='text-2xl font-bold'>Sumarse a idea</h1>
      <hr className='my-2' />
      <form>
        <div className='my-4'>
          <label htmlFor='code' className='text-sm block text-slate-400'>
            Código
          </label>
          <input
            id='code'
            type='text'
            className='border px-2 py-1 rounded-md w-full'
            placeholder='Ir a pescar'
            value={state.code}
            onChange={handleChange}
          />
        </div>
        <button
          className={`px-8 py-1 mb-4 bg-green-600 text-white rounded-full shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-200 transition-shadow ${
            loadingSubmit &&
            'opacity-60 hover:cursor-not-allowed hover:opacity-60 shadow-slate-600 hover:shadow-slate-600'
          }`}
          onClick={handleIncludeIdea}
          disabled={loadingSubmit}
        >
          ¡Unirse a idea!
        </button>
      </form>
    </>
  )
}
