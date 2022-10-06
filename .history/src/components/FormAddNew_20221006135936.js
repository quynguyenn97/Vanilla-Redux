import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const FormAddNew = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState;
    const hanldeCreateUser = (email, password, username) => {};
    return (
        <>
            <Container>
                <br />
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Username:</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Form>
                <Button variant="primary" onClick={() => hanldeCreateUser()}>
                    Create
                </Button>
            </Container>
        </>
    );
};
export default FormAddNew;
