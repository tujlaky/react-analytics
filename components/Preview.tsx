import clsx from "clsx";
import React from "react";
import { Notification } from "types/notification";

import styles from './Preview.module.css';

interface IPreviewProps {
  notification: Notification;
  className?: string;
}

function Preview({className, notification}: IPreviewProps) {
  return <div className={clsx("flex rounded overflow-hidden border-slate-300/10 border m-4 p-8 justify-center items-center", styles.dotsBg, className)}>
    <div className="rounded w-full bg-white max-w-md drop-shadow-lg flex flex-col justify-center items-start p-4">
      <div className="flex justify-between w-full">
        <h2 className="font-bold text-xl gap-2">{notification.event}</h2>
        <small className="text-sm text-gray-800">12 minutes ago</small>
      </div>

      <div className="flex w-full">
        {notification.description}
      </div>
      
      <div className="flex justify-end w-full">
        <span className="rounded-xl bg-gray-50 px-3 py-1.5 font-mono text-xs text-gray-700">{notification.channel}</span>
      </div>
    </div>
  </div>
}

export default Preview;