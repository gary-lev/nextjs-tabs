import { FC, HTMLProps } from 'react'
import { Table } from 'reactstrap'
import usePlacements from '../hooks/usePlacements'
import { Deal } from '../models'

interface Props extends HTMLProps<HTMLDivElement> {
  deal: Deal
}

const Lenders: FC<Props> = ({ deal, ...props }) => {
  const { placements } = usePlacements(deal.id)

  return (
    <div {...props}>
      <Table>
        <thead>
          <tr>
            <th>Lender</th>
            <th>Status</th>
            <th>Latest Notes</th>
            <th>Terms Received?</th>
          </tr>
        </thead>
        <tbody>
          {placements?.map(placement => (
            <tr key={placement.id}>
              <td>{placement.lender}</td>
              <td></td>
              <td>{placement.description}</td>
              <td>{placement.termSheetCounter > 0 ? 'Yes' : '-'}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Lenders
