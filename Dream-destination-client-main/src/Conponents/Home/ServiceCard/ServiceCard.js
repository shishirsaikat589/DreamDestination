import React from 'react';
import { Card } from 'react-bootstrap';
import './ServiceCard.css';
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
    return (
        <div className='col-md-4'  >
            <div className=''>
                <Link to={`/serviceOrder/${service.title}/${service.price}`} className='orderService'>
                    <Card className='text-center cardContent' style={{ padding: '20px', border: 'none' }}>
                        <Card.Img style={{ width: '300px', height: '180px', margin: 'auto' }}
                            variant="top" src={service.imageURL} />
                        <Card.Body>
                            <Card.Title style={{ color: "red" }} >{service.title}</Card.Title>
                            <Card.Text style={{ color: "#3C074D" }}>
                                {service.description}.
                            </Card.Text>
                            <Card.Title> <span style={{ color: "#B0A4B3" }} >From</span> <span style={{ color: "#1443B0" }} >$</span>{service.price}<br /> <span style={{ color: "#B0A4B3" }} >per person</span></Card.Title>
                        </Card.Body>
                        <button className="btn btn-primary" >Book now</button>
                    </Card>
                </Link>
            </div>
        </div>

    );
};

export default ServiceCard;