import React from 'react';
import { Card } from 'react-bootstrap';
import clock from '../../../images/icons/clock.png'
import heart from '../../../images/icons/heart.png'
import like from '../../../images/icons/doorknob.png'
const Motivation = () => {
    return (
<section  >
    
<div className="row mt-5" style={{backgroundColor:"#C6F1F9"}} >
            <div className='col-md-4'>
                <Card className='text-center cardContent' style={{ padding: '20px', border: 'none', backgroundColor: "#Eef5f5" }}>
                    <Card.Img style={{ width: '74px', height: '74px', margin: 'auto' }}
                        variant="top" src={like} />
                    <Card.Body>
                        <Card.Title>Free cancellation</Card.Title>
                        <Card.Text >
                            Don't stress if your plans change. Cancel up to 24 hours before your activity starts for a full refund.

                            </Card.Text>
                    </Card.Body>
                </Card>

            </div>
            <div className='col-md-4'>
                <div className=''>
                    <Card className='text-center cardContent' style={{ padding: '20px', border: 'none', backgroundColor: "#Eef5f5" }}>
                        <Card.Img style={{ width: '74px', height: '74px', margin: 'auto' }}
                            variant="top" src={clock} />
                        <Card.Body>
                            <Card.Title>Faster access
</Card.Title>
                            <Card.Text>
                                Skip the long ticket lines and get straight to the good stuff in the places everyone wants to visit..

                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            </div>
            <div className='col-md-4'>
                <div className=''>
                    <Card className='text-center cardContent' style={{ padding: '20px', border: 'none', backgroundColor: "#Eef5f5" }}>
                        <Card.Img style={{ width: '74px', height: '74px', margin: 'auto' }}
                            variant="top" src={heart} />
                        <Card.Body>
                            <Card.Title>Friendly help
</Card.Title>
                            <Card.Text>
                                We're standing by 24/7 to make your experience incredible. Reach us by phone, email, or WhatsApp.

                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </div>
</section>

    );
};

export default Motivation;