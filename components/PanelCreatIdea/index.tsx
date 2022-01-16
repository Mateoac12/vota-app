import { CreateIdeaForm } from 'components/CreateIdeaForm'
import { Modal } from 'components/Modal'
import { useState } from 'react'

export const PanelCreateIdea: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenModal = () => setOpen(true)

  return (
    <>
      <button
        onClick={handleOpenModal}
        className='border bg-green-600 text-white px-8 py-2 rounded-md text-xl w-60 shadow-green-200 shadow-lg hover:shadow-xl hover:shadow-green-200 transition-shadow'
      >
        ¡Crear Idea!
      </button>
      <Modal open={open} setOpen={setOpen}>
        <CreateIdeaForm setOpen={setOpen} />
      </Modal>
    </>
  )
}
