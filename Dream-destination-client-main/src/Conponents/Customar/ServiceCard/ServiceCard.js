import React, { useState } from 'react';
const ServiceCard = ({ service }) => {


    const cardStyle = {
        border: 'none',
        padding: '15px',
        background: '#ffffff',
        borderRadius: '15px'
    }
    console.log(service)
    return (
        <div className='col-md-6 mt-4'>
            <div style={cardStyle} >
                <div className="cardImg d-flex justify-content-between">
                    <div className='mt-3 pb-3'>
                        <h5>{service.Design.title}</h5>
                    </div>
                    <div>
                        <button className="btn btn-primary mt-4">{service.status}</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;