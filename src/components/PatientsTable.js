import { Col, Row, Table, Button } from "react-bootstrap"
import { useHistory, useLocation } from "react-router";
import patientService from "../services/patients";

export const PatientsTable = ({ patientsData, setFetch }) => {

    const history = useHistory();
    const location = useLocation();

    const handleClick = () => {

        if (location.pathname === "/") {
            history.push("/pacientes")
        } else {
            history.push("/");
        }
    }

    const eliminar = async (id) => {
        try {
            await patientService.deletePatientsById(id)
            setFetch(prev => !prev)
            alert("El Paciente ha sido eliminado")
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div>
            <Row>
                <Col>
                    <h2>Pacientes</h2>
                </Col>
                <Col>
                    <Button onClick={handleClick}> {location.pathname === "/" ? "Administrar pacientes" : "Volver a la home"} </Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Fecha Ingreso</th>
                    </tr>
                </thead>
                <tbody>
                {patientsData.length ? patientsData.map((patient, index) => (
                    <tr key={index}>
                        <td>{patient.nombre}</td>
                        <td>{patient.apellido}</td>
                        <td>{patient.dni}</td>
                        <td>{patient.admissionDate}</td>
                        <td>
                        <Button onClick={() => eliminar(patient.id)}>Eliminar</Button>
                        </td>
                    </tr>
                )) : <tr><td colSpan="5">Aún no hay pacientes cargados, agrega un paciente para verlo en la tabla.</td></tr>}
                </tbody>
            </Table>
        </div>
    )
}
