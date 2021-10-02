import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AppointmentsTable } from "../components/AppointmentsTable";
import { DentistsTable } from "../components/DentistsTable";
import { PatientsTable } from "../components/PatientsTable";
import appointmentsService from "../services/appointments";
import dentistsService from "../services/dentists";
import patientService from "../services/patients";

function Home() {

  const [dentistsData, setDentistsData] = useState([]);
  const [patientsData, setPatientsData] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([]);

  useEffect(() => {
    const getInfoData = async () => {
      try {
        const resDentist = await dentistsService.getDentists();
        const resPatient = await patientService.getPatients();
        const resAppointment = await appointmentsService.getAppointments();

        console.log(resAppointment)

        setDentistsData(resDentist);
        setPatientsData(resPatient);
        setAppointmentsData(resAppointment);

      } catch (err) {
        alert("Para recibir y editar los datos, primero debe iniciar el servidor en el puerto 8080")
        console.log(err)
      }
    }

    getInfoData();
  }, [])

  return (

    <Container className="Home">
      <Row>
        <Col md={6}>
          <DentistsTable dentistsData={dentistsData} />
          <PatientsTable patientsData={patientsData} />
        </Col>
        <Col md={6}>
          <AppointmentsTable appointmentsData={appointmentsData} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
