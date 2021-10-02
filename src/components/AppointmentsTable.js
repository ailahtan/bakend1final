import { Col, Row, Table, Button } from "react-bootstrap"
import { useHistory, useLocation } from "react-router"
import appointmentsService from "../services/appointments"


export const AppointmentsTable = ({ appointmentsData, setFetch }) => {

    const history = useHistory();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === "/") {
            history.push("/turns")
        } else {
            history.push("/");
        }
    } 

    const eliminar = async (id) => {
        try {
            await appointmentsService.deleteAppointmentsById(id);
            setFetch(prev => !prev)
            alert("El Turno ha sido eliminado")
        } catch (err) {
            console.log(err)
        }
    } 
 

    return (
        <div>
            <Row>
                <Col>
                    <h2>Turnos</h2>
                </Col>
                <Col>
                    <Button onClick={handleClick}> {location.pathname === "/" ? "Administrar turnos" : "Volver a la home"} </Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Odontologo</th>
                        <th>Paciente</th>
                    </tr>
                </thead>
                <tbody>
                {appointmentsData.length ? appointmentsData.map((appointment, index) => (
                    <tr key={index}>
                        <td>{appointment.date}</td>
                        <td>{appointment.dentist?.nombre}</td>
                        <td>{appointment.patient?.nombre}</td>
                        <td>
                        <Button onClick={() => eliminar(appointment.id)}>Eliminar</Button>
                        </td>
                    </tr>
                )) : <tr><td colSpan="5">Aún no hay turnos cargados, agrega un turno para verlo en la tabla.</td></tr>}
                </tbody>
            </Table>
        </div>
    )
} 