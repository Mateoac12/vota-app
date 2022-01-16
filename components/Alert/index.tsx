export const Alert: React.FC = ({ children }) => {
  return (
    <div className='bg-green-600 bottom-8 right-4 px-4 py-2 fixed rounded-md shadow-xl shadow-green-200 text-white z-40'>
      {children}
    </div>
  )
}
