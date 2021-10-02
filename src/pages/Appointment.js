import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AppointmentForm from "../components/AppointmentForm";
import { AppointmentsTable } from "../components/AppointmentsTable";
import appointmentsService from "../services/appointments";
import dentistsService from "../services/dentists";
import patientService from "../services/patients";

function Appointment() {
  const [dentistsData, setDentistsData] = useState([]);
  const [patientsData, setPatientsData] = useState([]);
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    const getInfoData = async () => {
      try {
        const resDentist = await dentistsService.getDentists();
        const resPatient = await patientService.getPatients();
        const resAppointment = await appointmentsService.getAppointments();

        setDentistsData(resDentist);
        setPatientsData(resPatient);
        setAppointmentsData(resAppointment);
        console.log(resAppointment)

      } catch (err) {
        console.log(err)
      }
    }
    getInfoData();
  }, [fetch])

  return (

    <Container className="Appointment">
      <Row>
        <Col md={6}>
          <AppointmentsTable appointmentsData={appointmentsData} />
        </Col>
        
        <Col md={6}>
          <AppointmentForm dentistsData={dentistsData} patientsData={patientsData} setFetch={setFetch} />
        </Col>
      </Row>
    </Container>
  );
}

export default Appointment;

