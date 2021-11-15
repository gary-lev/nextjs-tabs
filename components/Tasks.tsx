import { FC, HTMLProps } from 'react';
import { Table } from 'reactstrap';
import { Deal } from '../models';

interface Props extends HTMLProps<HTMLDivElement> {
  deal: Deal
}

const Tasks: FC<Props> = ({ deal, ...props }) => (
  <div {...props}>
    <Table>
      <thead>
        <tr>
          <th>Tasks</th>
          <th>Due Date</th>
          <th>Status</th>
        </tr>
      </thead>
    </Table>

    <div className="text-info text-center mt-3">
      (Would show tasks for {deal.name} here.)
    </div>
  </div>
);

export default Tasks
