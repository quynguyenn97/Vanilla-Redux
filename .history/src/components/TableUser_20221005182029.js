import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";

const TableUser = (props) => {
    const [listUser, setListUser] = useState([]);
    const fetchAllUser = async () => {
        let res = await axios.get("http://localhost:8080/users/all");
        const data = res && res.data ? res.data : [];
        setListUser(data);
    };
    useEffect(() => {
        fetchAllUser();
    }, []);
    console.log(">>>check data", listUser);
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
                        {}
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </>
    );
};
export default TableUser;
