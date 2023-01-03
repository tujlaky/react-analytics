import { Inter } from '@next/font/google'
import Preview from '@/components/Preview'
import Sidebar from '@/components/Sidebar'
import Configurator from '@/components/Configurator'
import { FormProvider, useForm } from 'react-hook-form'
import { Notification } from 'types/notification'
import { useToaster } from 'contexts/toaster'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const methods = useForm<Notification>();
  const { watch, handleSubmit } = methods;
  const notification = watch();

  const { showToast } = useToaster();

  const onSubmit = async (data: Notification) => {
    const JSONdata = JSON.stringify(data);
    const options: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    };

    await fetch('/api/log', options);

    showToast("🔥 Success!");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-1 flex-col'>
        <div className="flex justify-end p-4">
          <button type='submit' className='rounded bg-indigo-500 text-white p-2'>Submit</button>
        </div>
        <div className='flex flex-1 flex-col lg:flex-row'>
          <Sidebar className='lg:flex-grow'>
            <Configurator />
          </Sidebar>
          <Preview notification={notification} className='lg:w-[60%]'></Preview>
        </div>
      </form>
    </FormProvider>
  )
}
