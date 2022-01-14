import { TargetProp } from 'types/target'

export const Target: React.FC<TargetProp> = ({ content }) => {
  const { owner, title, date, description, members } = content

  return (
    <article className='border px-2 py-2 rounded-md w-80'>
      <span className='text-slate-400'>{owner}</span>
      <h2 className='text-2xl font-bold mb-2'>{title}</h2>
      <span className='bg-green-100 px-2 py-1 rounded-full text-xs'>
        {date}
      </span>
      <hr className='my-4' />
      <p>{description || 'Sin descripción...'}</p>
      <div className='flex justify-between items-center sticky top-full'>
        <button className='px-8 py-1 my-4 bg-green-600 text-white rounded-full shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-200 transition-shadow'>
          ¡Unirse!
        </button>
        <div className='flex items-center'>
          <span className='mr-6 font-semibold text-green-600'>
            +{members.length}
          </span>
          {members.map(({ user }) => (
            <img
              key={user.name}
              src={user.image}
              alt='avatar'
              className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
            />
          ))}
        </div>
      </div>
    </article>
  )
}
