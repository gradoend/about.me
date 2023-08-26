import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Layout: React.FC<{ children: React.ReactNode; center: boolean; onSignIn?: () => void }> = ({
  children,
  center,
  onSignIn
}) => {
  const session = useSession(),
    router = useRouter();

  return (
    <>
      <header className="container flex items-center justify-between p-4">
        <Link href="/" className="rounded-md text-2xl font-bold">
          About.me Page
        </Link>
        {router.pathname === '/' ? (
          <>
            {session.status === 'unauthenticated' && <button onClick={onSignIn}>Sign In</button>}
            {session.status === 'authenticated' && (
              <Link href="/dashboard" className="rounded">
                Dashboard
              </Link>
            )}
          </>
        ) : (
          <Link href="/" className="rounded">
            Home
          </Link>
        )}
      </header>
      <main
        className={`container flex flex-1 flex-col gap-8${
          center ? ' items-center justify-center' : ''
        }`}>
        {children}
      </main>
      <footer className="container flex flex-wrap justify-around gap-4 p-4 text-center">
        <p>
          Developed by{' '}
          <a
            className="rounded text-black underline"
            href="https://github.com/gradoend"
            target="_blank"
            rel="noopener noreferrer">
           Gradoend
          </a>
          .
        </p>{' '}
        <p>
          Open Source on{' '}
          <a
            className="rounded text-black underline"
            href="https://github.com/gradoend/about.me"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
          .
        </p>
      </footer>
    </>
  );
};

export default Layout;
