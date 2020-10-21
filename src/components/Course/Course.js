import React from 'react';
import './Course.css';
import { Button, } from 'react-bootstrap';

const Course = (props) => {
    const {name, fees, instractor, duration, img} = props.course;
    // console.log(props.course);
    return (
            <div className='single-course'>
                <div className='img-container'>
                    <img src={img} alt="" srcset=""/>
                </div>
                <div className='course-container'>
                    <h4>{name}</h4>
                    <h5>By: {instractor}</h5>
                    <p>Fee: {fees}$</p>
                    <p><small>Duration: {duration}</small> Hrs</p>
                    <Button onClick={()=>props.handleAddCart(props.course)} variant="success">Enroll Now</Button>
                </div>
            </div>
    );
};

export default Course;