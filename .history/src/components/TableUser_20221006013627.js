import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUser } from "../action/actions";

const TableUser = (props) => {
    const dispatch = useDispatch();
    const listUsers = useSelector((state) => state.user.listUsers);
    const isLoading = useSelector((state) => state.user.isLoading);
    const isError = useSelector((state) => state.user.isError);

    useEffect(() => {
        dispatch(fetchAllUser());
    }, []);
    const handleDeleteUser = async (item) => {
        let rs = await axios.post(
            `http://localhost:8080/users/delete/:${item.id}`
        );
    };
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
                        {isError === true ? (
                            <>Somethings wrong, please try again...</>
                        )
                            :
                            <>
                                {isLoading === true ?
                                    <><div>Loaing data...</div></>
                                    :
                                    (
                            <>
                                {listUsers &&
                                    listUsers.length > 0 &&
                                    listUsers.map((item, index) => {
                                        return (
                                            <tr key={`user-${index}`}>
                                                <td>{index + 1}</td>
                                                <td>{item.email}</td>
                                                <td>{item.username}</td>
                                                <td>
                                                    <button className="btn btn-warning">
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="btn btn-danger"
                                                        onClick={() =>
                                                            handleDeleteUser(
                                                                item
                                                            )
                                                        }>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </>
                        )}
                                    }
                        
                        
                        
                           
                        </>
                    </tbody>
                </Table>
            </Container>
        </>
    );
};
export default TableUser;
