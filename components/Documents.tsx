import { FC, HTMLProps } from 'react'
import { Table } from 'reactstrap'
import { format } from 'date-fns'
import useDocuments from '../hooks/useDocuments'
import { Deal } from '../models'

interface Props extends HTMLProps<HTMLDivElement> {
  deal: Deal
}

const Documents: FC<Props> = ({ deal, ...props }) => {
  const { documents } = useDocuments(deal.id)

  return (
    <div {...props}>
      <Table>
        <thead>
          <tr>
            <th>Documents</th>
            <th>Document Type</th>
            <th>Upload Date</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {documents?.map(doc => (
            <tr key={doc.id}>
              <td>{doc.fileName}</td>
              <td>{doc.type}</td>
              <td>{format(doc.insertedAt, 'M/d/yyyy')}</td>
              <td>-</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Documents
