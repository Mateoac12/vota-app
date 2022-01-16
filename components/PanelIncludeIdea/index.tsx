import { IncludeIdeaForm } from 'components/IncludeIdeaForm'
import { Modal } from 'components/Modal'
import { useState } from 'react'

export const PanelIncludeIdea: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenModal = () => setOpen(true)

  return (
    <>
      <button
        className='border px-8 py-2 rounded-md text-xl text-green-50 bg-purple-300  w-60 shadow-purple-200 shadow-xl cursor-not-allowed relative
        before:content-["Pronto"] before:absolute before:-top-4 before:right-2 before:bg-purple-400 before:text-white before:px-2 before:py-1 before:text-xs before:rounded-full'
        onClick={handleOpenModal}
        disabled={true}
      >
        ¡Sumarse a Idea!
      </button>
      <Modal open={open} setOpen={setOpen}>
        <IncludeIdeaForm />
      </Modal>
    </>
  )
}
