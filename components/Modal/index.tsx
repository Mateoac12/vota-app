interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

export const Modal: React.FC<Props> = ({ children, open, setOpen }) => {
  const handleClose = () => setOpen(false)

  if (!open) return null

  return (
    <div className='w-full h-screen fixed bg-slate-50 bg-opacity-50 left-0 top-0 z-40 flex items-center justify-center'>
      <article className='bg-white w-80 border px-4 py-2 rounded-md shadow-lg relative'>
        <button
          className='absolute -top-4 -right-4 px-4 py-4 bg-slate-200 rounded-full w-8 h-8 flex items-center justify-center'
          onClick={handleClose}
        >
          <div className='w-4 border border-slate-400 absolute rotate-45'></div>
          <div className='w-4 border border-slate-400 absolute -rotate-45'></div>
        </button>
        {children}
      </article>
    </div>
  )
}
