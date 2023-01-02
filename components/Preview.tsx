import clsx from "clsx";
import React from "react";

import styles from './Preview.module.css';

function Preview({className}: {className?: string}) {
  return <div className={clsx("flex rounded overflow-hidden border-slate-300/10 border m-4 p-8 justify-center items-center", styles.dotsBg, className)}>
    <div className="rounded bg-white w-80 h-20">

    </div>
  </div>
}

export default Preview;