import { useState } from "react";
import { Col, Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import appointmentsService from "../services/appointments";

function AppointmentForm({ setFetch, dentistsData, patientsData }) {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    const [patientId, setPatientId] = useState();
    const [dentistId, setDentistId] = useState();

    const onSubmit = async (data) => {

        if (!patientId && !dentistId) {
            return alert("seleccione un odontologo y un paciente para reservar el turno.")
        }
        data.dentist = dentistsData.find(d => d.id === dentistId)
        data.patient = patientsData.find(p => p.id === patientId)

        try {
            setLoading(true);
            await appointmentsService.postAppointments(data)
        } catch (err) {
            console.log(err)

        } finally {
            setLoading(false);
            setFetch(prev => !prev);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Col md={6}>
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                    {...register('date', { required: true })}
                    type="datetime-local"
                    placeholder="Fecha"
                />
                <label>Odontologo
                    <select value={dentistId} placeholder="Odontologo" onChange={e => setDentistId(parseInt(e.target.value))}>
                        <option value="" selected disabled hidden>Seleccione un odontologo</option>
                        {dentistsData.length ? dentistsData.map((dentist, index) => (
                            <option key={index} value={dentist.id}>{dentist.nombre} {dentist.apellido} {dentist.matricula}</option>
                        )) : <option>Aún no hay odontologos cargados, agrega un odontologo para verlo en la tabla.</option>}
                    </select>
                </label>
                <label>Paciente
                    <select value={patientId} placeholder="Paciente" onChange={e => setPatientId(parseInt(e.target.value))}>
                        <option value="" selected disabled hidden>Seleccione un paciente</option>
                        {patientsData.length ? patientsData.map((patient, index) => (
                            <option key={index} value={patient.id}>{patient.nombre} {patient.apellido}</option>
                        )) : <option>Aún no hay pacientes cargados, agrega un paciente para verlo en la tabla.</option>}
                    </select>
                </label>
            </Col>

            <Button type="submit">
                {loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> :
                    "Reservar turno"
                }
            </Button>
        </Form>
    );
}

export default AppointmentForm;