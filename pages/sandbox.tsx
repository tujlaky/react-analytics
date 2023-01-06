import { Inter } from '@next/font/google'
import Preview from '@/components/Preview'
import Sidebar from '@/components/Sidebar'
import Configurator from '@/components/Configurator'
import { FormProvider, useForm } from 'react-hook-form'
import { Notification } from 'types/notification'
import { useToaster } from 'contexts/toaster'

import {
  AuthAction,
  withAuthUser,
} from 'next-firebase-auth'
import Button from '@/components/Button'
import { addEvent, getEventCollection } from 'database/event'
import { addDoc, serverTimestamp } from 'firebase/firestore'

const inter = Inter({ subsets: ['latin'] })

export function Sandbox() {
  const methods = useForm<Notification>();
  const { watch, handleSubmit, register } = methods;
  const notification = watch();

  const { showToast } = useToaster();

  const onSubmit = async (data: Omit<Omit<Notification, "id">, "createdAt">) => {
    addEvent({
      ...data,
      createdAt: serverTimestamp()
    });

    showToast("🔥 Success!");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-1 flex-col'>
        <input type="hidden" {...register('createdAt')} value={new Date().getTime() - 12 * 60 * 1000} />
        <div className="flex justify-end p-4">
          <Button color='primary' type='submit'>Submit</Button>
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

export default withAuthUser({
  whenAuthed: AuthAction.RENDER,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN
})(Sandbox)