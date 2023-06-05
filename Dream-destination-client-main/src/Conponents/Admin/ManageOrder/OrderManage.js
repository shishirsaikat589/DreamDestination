import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap';
const OrderManage = (props) => {
    const { name, Design, _id, status } = props.books;
    const history = useHistory()
    const handleDelete = id => {
        fetch(`https://fathomless-everglades-19778.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                alert('deleted')
                history.push('/admin')
            })
    }

    const handleEdit = id => {

        fetch(`https://fathomless-everglades-19778.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {

            })
    }

    return (
        <div>
            <tr>
                <td>{name}</td>
                <td>{Design.title}</td>
                <td><button onClick={() => handleDelete(_id)} className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt} /> </button></td>
            </tr>
        </div>
    );
};

export default OrderManage;