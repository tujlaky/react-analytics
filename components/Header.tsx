import clsx from 'clsx';

function Header(props: React.HTMLProps<HTMLHeadElement>) {
  return <header {...props} className={clsx('py-4 border-b border-slate-900/10 px-4 dark:border-slate-300/10', props.className)}>
    <h1 className="text-3xl text-white font-black">analytics</h1>

  </header>
}

export default Header;