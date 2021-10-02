import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PatientForm from "../components/PatientForm";
import { PatientsTable } from "../components/PatientsTable";
import patientsService from "../services/patients";

function Patient() {
  const [patientsData, setPatientsData] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const getInfoData = async () => {
      try {
        const resPatient = await patientsService.getPatients();

        setPatientsData(resPatient);

      } catch (err) {
        console.log(err)
      }
    }
    getInfoData();
  }, [fetch])

  return (

    <Container className="Patient">
      <Row>
        <Col md={6}>
          <PatientsTable patientsData={patientsData} />
        </Col>
        
        <Col md={6}>
          <PatientForm setFetch={setFetch} />
        </Col>
      </Row>
    </Container>
  );
}

export default Patient;

