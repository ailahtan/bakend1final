import { useState } from "react";
import { Col, Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import patientService from "../services/patients";

function PatientForm({ setFetch }) {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = async (event) => {
        try {
            setLoading(true);
            await patientService.postPatients(event)
        } catch (err) {
            console.log(err)

        }finally{
            setLoading(false);
            setFetch(prev => !prev);
        }
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Col md={6}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        {...register('nombre', { required: true })}
                        type="text"
                        placeholder="Nombre"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        {...register('apellido', { required: true })}
                        type="text"
                        placeholder="Apellido"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>DNI</Form.Label>
                    <Form.Control
                        {...register('dni', { required: true })}
                        type="text"
                        placeholder="DNI"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Fecha Ingreso</Form.Label>
                    <Form.Control
                        {...register('admissionDate', { required: true })}
                        type="date"
                        placeholder="Fecha Ingreso"
                    />
                </Form.Group>
            </Col>

            <Button type="submit">
                {loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> :
                    "Añadir paciente"
                }
            </Button>
        </Form>
    );
}

export default PatientForm;