import clsx from "clsx";
import React from "react";
import { NotificationCreate } from "types/notification";
import NotificationCard from "./NotificationCard";

import styles from './Preview.module.css';

interface PreviewProps {
  notification: NotificationCreate;
  className?: string;
}

function Preview({className, notification}: PreviewProps) {
  return <div className={clsx("flex rounded overflow-hidden border-slate-300/10 border m-4 p-8 justify-center items-center", styles.dotsBg, className)}>
    <NotificationCard notification={notification} />
  </div>
}

export default Preview;