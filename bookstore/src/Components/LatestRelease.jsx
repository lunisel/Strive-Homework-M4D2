import {Container, Row, Col} from "react-bootstrap"
import books from "../romance.json"

const LatestRelease = () => (
    <Container>
        <h1>Latest Releases</h1>
        <Row>
            {
                books.map(book => (
                    <Col key={book.id} xs={6} md={4} lg={3} className="my-2">
                        <img className="img-fluid" src={book.img} style={{maxHeight: "25rem"}}/>
                    </Col>
                ))
            }
        </Row>
    </Container>
)

export default LatestRelease