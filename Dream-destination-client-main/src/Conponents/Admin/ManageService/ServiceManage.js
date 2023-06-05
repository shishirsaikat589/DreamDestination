import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';
import { Table } from 'react-bootstrap';
const ServiceManage = ({ service }, { key }) => {
    // const {title} = props.books;
    const history = useHistory()
    const handleDelete = id => {
        fetch(`https://fathomless-everglades-19778.herokuapp.com/delete/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                alert('deleted')
                history.push('/addService')
            })
    }
    const logoStyle = {
        width: '150px',
    }
    const tableStyle = {
        width: '950px',
        // height : '300px',
        background: '#ffffff',
        borderRadius: '15px',
        padding: '20px'
    }
    console.log(service.title)
    // console.log(service._id)
    return (


        <div className="row">


            <div className="col-md-3">
                <div className="">
                    <tr>
                        <td scope="row">{service.title}</td>
                        <td><button onClick={() => handleDelete(service._id)} className="btn btn-danger btn-sm"> <FontAwesomeIcon icon={faTrashAlt} /> </button></td>
                    </tr>
                </div>
            </div>
        </div >








    );
};

export default ServiceManage;