import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Row, Col, Container } from 'react-bootstrap';
import PlayBar from './Components/PlayBar';
import NavBar from './Components/NavBar';

function ArtistPage() {
  return (
    <Container>
      <Row>
        <Col ls={2}>
          <NavBar />
        </Col>
        <Col xs={10}>
        </Col>
      </Row>
      <PlayBar />
      </Container>
  )
}

export default ArtistPage;
