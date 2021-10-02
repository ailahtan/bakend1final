import { Table, Button, Row, Col } from "react-bootstrap"
import { useHistory, useLocation } from "react-router"
import dentistsService from "../services/dentists";

export const DentistsTable = ({ dentistsData, setFetch }) => { 

    const history = useHistory();
    const location = useLocation();

    const handleClick = () => {

        if (location.pathname === "/") {
            history.push("/odontologos")
        } else {
            history.push("/");
        }
    }

    const eliminar = async (id) => {
        try {
            await dentistsService.deleteDentistsById(id)
            setFetch(prev => !prev)
            alert("El Dentista ha sido eliminado")
        } catch (err) {
            console.log(err)
        }
    }

    return (

        <div>
            <Row>
                <Col>
                    <h2>Odontologos</h2>
                </Col>
                <Col>
                    <Button onClick={handleClick}> {location.pathname === "/" ? "Administrar odontologos" : "Volver a la home"} </Button>
                </Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Matricula</th>
                    </tr>
                </thead>
                <tbody>
                    {dentistsData.length ? dentistsData.map((dentist, index) => (
                        <tr key={index}>
                            <td>{dentist.nombre}</td>
                            <td>{dentist.apellido}</td>
                            <td>{dentist.matricula}</td>
                            <td>
                            <Button onClick={() => eliminar(dentist.id)}>Eliminar</Button>
                            </td>
                        </tr>
                    )) : <tr><td colSpan="5">Aún no hay odontologos cargados, agrega un odontologo para verlo en la tabla.</td></tr>}
                </tbody>
            </Table>
        </div>
    )
}

