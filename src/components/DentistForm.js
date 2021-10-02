import { useState } from "react";
import { Col, Form, Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import dentistsService from "../services/dentists";

function DentistForm({ setFetch }) {

    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            await dentistsService.postDentists(data)
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
                    <Form.Label>Matricula</Form.Label>
                    <Form.Control
                        {...register('matricula', { required: true })}
                        type="number"
                        placeholder="Matricula"
                    />
                </Form.Group>
            </Col>

            <Button type="submit">
                {loading ?
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> :
                    "Añadir odontólogo"
                }
            </Button>
        </Form>
    );
}

export default DentistForm;
