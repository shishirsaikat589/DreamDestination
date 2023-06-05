import React, { useEffect, useState } from 'react';
import './Service.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import { css } from "@emotion/core";
import { RingLoader } from 'react-spinners';
import Order from '../../Customar/Order/Order';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Services = () => {
    const [getService, setGetService] = useState([])
    useEffect(() => {
        fetch("https://fathomless-everglades-19778.herokuapp.com/getService")
            .then(res => res.json())
            .then(data => {
                setGetService(data)
            })
    }, [])



    return (
        <section style={{ padding: '70px 0', backgroundColor: "#D3e0e0" }}>
            <div className="container">
                <div>
                    <h2 className='text-center my-5' style={{ color: "#0F32F4" }} >Book Your
                        <span style={{ color: '#F4630F ' }}> Destination </span>
                    </h2>
                    <div className='row'>
                        {
                            getService.length === 0 &&
                            <RingLoader
                                css={override}
                                size={50}
                                color={"#0F32F4"}
                            />
                        }

                        {

                            getService.map(service => <ServiceCard
                                service={service}></ServiceCard>)
                        }



                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;