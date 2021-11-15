import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Alert, Badge, Button, Spinner } from 'reactstrap'

import Tab from '../../../components/Tab'
import TabPane from '../../../components/TabPane'
import Lenders from '../../../components/Lenders'
import Terms from '../../../components/Terms'
import Tasks from '../../../components/Tasks'
import Documents from '../../../components/Documents'
import useDeal from '../../../hooks/useDeal'

const DealsPage: NextPage = () => {
  const { query } = useRouter()
  const { deal, loading, error } = useDeal(query.id as string)

  return (
    <>
      {error && (
        <Alert color="danger">
          {error}
        </Alert>
      )}

      {loading && (
        <div className="d-flex align-items-center justify-content-center h-100">
          <h2>
            <Spinner className="fw-normal" /> Loading...
          </h2>
        </div>
      )}

      {deal && (
        <>
          <div className="d-flex">
            <h2>{deal.name}</h2>
            <div className="ms-auto">
              <Button outline>Need Help?</Button>
            </div>
          </div>
  
          <TabPane>
            <Tab
              href={`/deals/${deal.id}/lenders`}
              label="Lenders"
            >
              <Lenders deal={deal} />
            </Tab>
            <Tab
              href={`/deals/${deal.id}/terms`}
              label="Terms Received"
            >
              <Terms deal={deal} />
            </Tab>
            <Tab
              href={`/deals/${deal.id}/tasks`}
              label={<>Tasks <Badge>3</Badge></>}
            >
              <Tasks deal={deal} />
            </Tab>
            <Tab
              href={`/deals/${deal.id}/documents`}
              label="Documents"
            >
              <Documents deal={deal} />
            </Tab>
          </TabPane>
        </>
      )}
    </>
  )
}

export default DealsPage
