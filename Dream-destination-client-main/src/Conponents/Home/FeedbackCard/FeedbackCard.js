import React from 'react';
import { Card } from 'react-bootstrap';
import './FeedbackCard.css'

const FeedbackCard = ({ feed }) => {

    return (
        <div className='col-md-4 col-sm-12 mt-4'>
            <div className=''>
                <Card className='feedcard' style={{ padding: '10px' }}>
                    <div className='d-flex'>
                        <div style={{ width: '90px' }}>
                            <Card.Img style={{ width: '74px', height: '74px', margin: 'auto' }}
                                variant="top" src={feed.photo} />
                        </div>
                        <div>
                            <Card.Title> <h3>{feed.name}</h3> </Card.Title>
                            <Card.Title> <small>{feed.email}</small> </Card.Title>
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title>
                            <small>{feed.company}</small>
                        </Card.Title>
                        <Card.Text>
                            {feed.description}
                            {feed.email.image}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default FeedbackCard;