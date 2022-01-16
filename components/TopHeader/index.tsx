import { MateoAlvarezLogo } from './MateoAlvarezLogo'

export const TopHeader: React.FC = () => {
  return (
    <div className='bg-black flex justify-center items-center py-1'>
      <a
        target='_blank'
        href='https://mateo-alvarez.vercel.app/'
        rel='noopener noreferrer'
        className='text-white flex gap-2'
      >
        <MateoAlvarezLogo />
        Mateo Alvarez
      </a>
    </div>
  )
}
