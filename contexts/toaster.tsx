import clsx from "clsx";
import { createContext, PropsWithChildren, ReactNode, useContext, useEffect, useState } from "react";

type ToastProviderProps = {
  children: ReactNode
}

type ToasterContext = {
  toast: string | undefined,
  toastVisible: boolean;
  showToast: (message: string, options?: {delay?: number, classes?: string}) => void
};

const ToasterContext = createContext<ToasterContext>({} as ToasterContext);

export function useToaster() {
  return useContext(ToasterContext);
}

export function ToastProvider({ children}: ToastProviderProps) {
  const [toastMessage, setToastMessage] = useState<string | undefined>(undefined);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [delay, setDelay] = useState<number>(2000);
  const [classes, setClasses] = useState<string>('');

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const t = setTimeout(() => setIsVisible(false), delay);

    return () => clearTimeout(t);
  }, [toastMessage, isVisible, delay]);

  return <ToasterContext.Provider value={{
    toast: toastMessage,
    toastVisible: isVisible,
    showToast: (message, options) => {
      setToastMessage(message);
      setDelay(options?.delay ?? 2000);
      setIsVisible(true);
      setClasses(options?.classes ?? 'bg-white');
    }
  }}>
    {children}
    <div className={clsx("fixed transition-transform duration-500 out-expo right-0 top-0 p-4", {
      'translate-x-full': !isVisible,
    })}>
      <div className={clsx("transition-opacity duration-500 drop-shadow-md rounded p-4", {
        'opacity-100': !!isVisible,
        'opacity-0': !isVisible,
      }, classes)}>
          {toastMessage}
      </div>
    </div>

  </ToasterContext.Provider>
}