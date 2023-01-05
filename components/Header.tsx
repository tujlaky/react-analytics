import clsx from 'clsx';
import Link from 'next/link';
import { useAuthUser, withAuthUser } from 'next-firebase-auth';
import { useRouter } from 'next/router';

function Header(props: React.HTMLProps<HTMLHeadElement>) {
  const router = useRouter();
  const user = useAuthUser();

  const logoutUser = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();

    await user.signOut();
    router.push('/login');
  }

  return <header {...props} className={clsx('flex justify-between items-center py-4 border-b border-slate-900/10 px-4 dark:border-slate-300/10', props.className)}>
    <h1 className="text-3xl text-indigo-500 dark:text-indigo-200 font-black">analytics</h1>
    {user.id && <nav className='font-semibold text-slate-700 dark:text-slate-200'>
      <ul className='m-0 p-0 list-none flex space-x-4 items-center'>
        <li><Link className='hover:text-indigo-500 dark:hover:text-sky-400' href="/">Live</Link></li>
        <li><Link className='hover:text-indigo-500 dark:hover:text-sky-400' href="/sandbox">Sandbox</Link></li>
        <li><a href='#' onClick={e => logoutUser(e)} className='hover:text-indigo-500 dark:hover:text-sky-400'>Logout</a></li>
      </ul>
    </nav>}
  </header>
}

export default withAuthUser<React.HTMLProps<HTMLHeadElement>>()(Header);