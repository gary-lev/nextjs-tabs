import type { NextPage } from 'next'
import { Button, Card, Col, Row } from 'reactstrap'
import useDeals from '../hooks/useDeals'

const Home: NextPage = () => {
  const { deals } = useDeals()

  return (
    <div>
      <main>
        <h1>Active Deals</h1>

        {deals?.map(deal => (
          <Card body className="shadow mb-3" key={deal.id}>
            <Row>
              <Col sm={4} md={3}>
                <svg className="mb-3 mb-md-0"
                  width="100%"
                  height="180"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" fill="#868e96" />
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Map</text>
                </svg>
              </Col>
              <Col sm={5} md={6}>
                <h4>{deal.name}</h4>
                {deal.location.city}, {deal.location.state} {deal.location.postcode}
              </Col>
              <Col sm={3}>
                <Button color="success" block>Continue</Button>
              </Col>
            </Row>
          </Card>
        ))}
      </main>
    </div>
  )
}

export default Home
