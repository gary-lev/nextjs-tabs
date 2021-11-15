import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Nav, NavProps, NavItem, NavLink } from 'reactstrap'
import { TabProps } from './Tab'
import classnames from 'clsx'

interface TabPaneProps extends NavProps {
  children?: React.ReactElement<TabProps>[]
}

const TabPane: FC<TabPaneProps> = ({ children, className, ...props }) => {
  const { asPath } = useRouter()

  return (
    <>
      <Nav tabs className={classnames('mb-3', className)} {...props}>
        {children?.map((tab, i) => (
          <NavItem key={i}>
            <Link href={tab.props.href} passHref>
              <NavLink active={asPath === tab.props.href}>
                {tab.props.label}
              </NavLink>
            </Link>
          </NavItem>
        ))}
      </Nav>

      {children?.map(tab => (
        asPath === tab.props.href ? (
          <div>
            {tab}
          </div>
        ) : undefined
      ))}
    </>
  )
}

export default TabPane
