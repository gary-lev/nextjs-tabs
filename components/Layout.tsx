import { FC, HTMLProps, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button, Input, ListGroup, ListGroupItem, Navbar } from 'reactstrap'
import useDeals from '../hooks/useDeals'

interface Props extends HTMLProps<HTMLDivElement> {}

const Layout: FC<Props> = ({ children, ...props }) => {
  const { asPath } = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { deals } = useDeals()

  return (
    <>
      <div id="layout" {...props} className={isOpen ? 'sidebar-open' : undefined}>
        <header>
          <Navbar color="dark" dark className="d-flex align-items-center justify-content-between h-100">
            <Button color="link" className="text-white d-md-none p-2" onClick={() => setIsOpen(true)}>
              <i className="bi bi-list h4"></i>
            </Button>
            <Link href="/">
              <img src="/nextjs-tabs/images/Lev_Logo_White.svg" alt="Lev Logo" height={50} className="mt-n3" />
            </Link>
            <Input type="search" placeholder="Search" className="w-auto ms-auto bg-transparent text-light" />
          </Navbar>
        </header>

        <nav className="bg-primary">
          {deals && (
            <ListGroup flush>
              {deals.map(deal => (
                <Link key={deal.id} href={`/deals/${deal.id}/lenders`}>
                  <ListGroupItem
                    action
                    className={asPath.startsWith(`/deals/${deal.id}`) ? 'bg-secondary text-white' : 'bg-transparent text-white'}
                    key={deal.id}
                    style={{ cursor: 'pointer' }}
                  >
                    {deal.name}
                  </ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          )}
        </nav>

        <main className="p-3">
          {children}
        </main>
        <div id="overlay" onClick={() => setIsOpen(false)} />
      </div>

      <style jsx>{`
        #layout {
          display: grid;
          height: 100vh;
          grid-template-columns: 220px 1fr;
          grid-template-rows: 75px 1fr;
        }
        nav {
          grid-column: 1;
          grid-row: 1 / -1;
          overflow-y: auto;
          transform: translateX(-100%);
          transition: transform 150ms ease-in-out;
          will-change: transform;
        }
        header {
          grid-column: 1 / -1;
          grid-row: 1;
        }
        main {
          grid-column: 1 / -1;
          grid-row: 2 / -1;
          overflow-y: auto;
        }
        #overlay {
          background-color: black;
          opacity: 0;
          transition: opacity 150ms ease-in-out;
        }

        /* < md */
        @media (max-width: 767px) {
          nav {
            z-index: 20000;
          }
          .sidebar-open nav {
            grid-row: 1 / -1;
            transform: translateX(0);
          }
          .sidebar-open #overlay {
            grid-column: 1 / -1;
            grid-row: 1 / -1;
            opacity: 0.5;
            z-index: 10000;
          }
        }

        @media (min-width: 768px) {
          nav {
            transform: translateX(0);
          }
          header {
            grid-column: 1 / -1;
          }
          main {
            grid-column: 2 / -1;
          }
          nav {
            grid-row: 2 / -1;
          }
        }
      `}</style>
    </>
  )
}

export default Layout
