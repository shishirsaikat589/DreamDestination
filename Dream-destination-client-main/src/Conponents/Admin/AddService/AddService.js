import React, { useContext, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../Sidebar/Sidebar';

const axios = require('axios').default;
const AddService = () => {
    const [loggedInUser] = useContext(UserContext);
    const logoStyle = {
        width: '200px',
        height: '100px'
    }
    const servicesStyle = {
        width: '900px',
        height: '300px',
        background: '#ffffff',
        borderRadius: '15px',
        padding: '20px'
    }
    const { register, handleSubmit, watch, errors } = useForm();

    const [imageURL, setImageURL] = useState(null)
    const handleImage = (e) => {
        const imageData = new FormData();
        imageData.set('key', 'd4ab1958944a689da2ede6dfed4448c8')
        imageData.append('image', e.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const history = useHistory()
    const onSubmit = data => {

        const services = {
            title: data.title,
            price: data.Price,
            imageURL: imageURL,
            description: data.designation
        }
        if (imageURL) {
            fetch('https://fathomless-everglades-19778.herokuapp.com/addService', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(services)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    history.push('/admin')
                })
        }
        else (alert('Uploading Photo Please Wait'))

    };
    const customImage = {
        border: '1px solid #293845',
        padding: '5px 20px',
        borderRadius: '5px',
        background: '#2938454d',
        cursor: 'pointer'
    }
    return (
        <div style={{ background: '#FFFFFF' }}>
            <div className='container'>
                <div style={{ padding: '20px 0' }} className="Topbar d-flex">
                    <div style={{ width: '20%' }} className="top">
                        <Link to='/home'><img style={logoStyle} src={logo} alt="" /></Link>
                    </div>
                    <div style={{ width: '80%' }} className="userData d-flex justify-content-between">
                        <h5 style={{ marginTop: '15px' }}>Add Service</h5>
                                                                            <img style={{borderRadius: '50px', height: '30px'}} src={loggedInUser.photoURL} alt="" />


                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-9">
                    <div className="orderSubmit">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div className='d-flex' style={servicesStyle}>
                                <div>
                                    <label>Place Name</label>
                                    <input name="title" style={{ width: '500px', padding: '20px 10px' }} placeholder='Enter title' className='form-control' ref={register({ required: true })} /> <br />
                                    <label> Price</label>
                                    <input name="Price" style={{ width: '500px', padding: '20px 10px' }} placeholder='Enter Price' className='form-control' ref={register({ required: true })} /> <br />
                                    <label>Description</label>
                                    <textarea name="designation" style={{ width: '500px', padding: '20px 10px' }} placeholder='Enter Designation' className='form-control' ref={register({ required: true })} />
                                </div>
                                <div className="col-md-6 my-3">
                                    <label htmlFor=""><strong>Photo</strong></label>
                                    <br />
                                    <label style={customImage} htmlFor="image" id="custom-image" ><strong><FontAwesomeIcon icon={faCloudUploadAlt} /> Click To  Upload</strong></label>
                                    {imageURL && <strong>Photo Uploaded</strong>}
                                    <br />
                                    <input onChange={handleImage} type="file" id="image" className="form-control" name="image" ref={register({ required: true })} hidden />
                                    {errors.image && <small>This field is required</small>}
                                </div>
                            </div>

                            <div className='d-flex justify-content-end'>
                                <input type="submit" value='SEND' style={{ width: '150px', height: '40px', fontSize: '16px', background: '#009444', color: '#FFFFFF', borderRadius: '10px', marginTop: '20px', marginRight: '35px' }} />
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AddService;