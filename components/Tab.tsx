import { FC, HTMLProps, ReactNode } from 'react'

export interface TabProps extends Omit<HTMLProps<HTMLDivElement>, 'label'> {
  href: string
  label: ReactNode
}

const Tab: FC<TabProps> = ({ children, label, href, ...props }) => (
  <div {...props}>
    {children}
  </div>
)

export default Tab
