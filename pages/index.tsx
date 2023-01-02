import { Inter } from '@next/font/google'
import Preview from '@/components/Preview'
import Sidebar from '@/components/Sidebar'
import Configurator from '@/components/Configurator'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex flex-1 flex-col lg:flex-row'>
      <Sidebar className='lg:flex-grow'>
        <Configurator onChange={x => console.log(x)} />
      </Sidebar>
      <Preview className='lg:w-[60%]'></Preview>
    </div>
  )
}
