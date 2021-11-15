import { FC, HTMLProps } from 'react'
import { Table } from 'reactstrap'
import { Deal } from '../models'

interface Props extends HTMLProps<HTMLDivElement> {
  deal: Deal
}

const Terms: FC<Props> = ({ deal, ...props }) => (
  <div {...props}>
    <Table>
      <thead>
        <tr>
          <th>Lender Name</th>
          <th>1880 Bank</th>
          <th>Pacific Life</th>
          <th>Natixis</th>
        </tr>
      </thead>
    </Table>

    <div className="text-info text-center mt-3">
      (Would show terms for {deal.name} here.)
    </div>
  </div>
);

export default Terms
