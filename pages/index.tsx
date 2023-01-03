import { Inter } from '@next/font/google'
import Preview from '@/components/Preview'
import Sidebar from '@/components/Sidebar'
import Configurator from '@/components/Configurator'
import { FormProvider, useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { Notification } from 'types/notification'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const methods = useForm<Notification>();
  const { watch } = methods;
  const notification = watch();

  return (
    <FormProvider {...methods}>
      <form className='flex flex-1 flex-col lg:flex-row'>
        <Sidebar className='lg:flex-grow'>
          <Configurator />
        </Sidebar>
        <Preview notification={notification} className='lg:w-[60%]'></Preview>
      </form>
    </FormProvider>

  )
}
