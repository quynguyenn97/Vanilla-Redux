import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect } from "react";

const TableUser = (props) => {
    const fetchAllUser = async () => {
        let res = await axios.get("http://localhost:8080/users/all");
        const data = res && res.data ? res.data : [];
        console.log(">>>check data", data);
    };
    useEffect(() => {
        fetchAllUser();
    }, []);
    return (
        <>
            <Container>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>Thornton</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
};
export default TableUser;
