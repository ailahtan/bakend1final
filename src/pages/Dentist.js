import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DentistForm from "../components/DentistForm";
import { DentistsTable } from "../components/DentistsTable";
import dentistsService from "../services/dentists";

function Dentist() {
  const [dentistsData, setDentistsData] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const getInfoData = async () => {
      try {
        const resDentist = await dentistsService.getDentists();

        setDentistsData(resDentist);

      } catch (err) {
        console.log(err)
      }
    }
    getInfoData();
  }, [fetch])

  return (

    <Container className="Dentist">
      <Row>
        <Col md={6}>
          <DentistsTable dentistsData={dentistsData} />
        </Col>
        
        <Col md={6}>
          <DentistForm setFetch={setFetch} />
        </Col>
      </Row>
    </Container>
  );
}

export default Dentist;
