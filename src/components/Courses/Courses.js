import React from 'react';
import fakeData from '../FakeData/fakeData';
import { useState } from 'react';
import Course from '../Course/Course';
import './Courses.css';
import Cart from '../Cart/Cart';

const Courses = () => {
    const [courses, setCourses] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleAddCart = (course)=>{
        const newCart = [...cart, course];
        setCart(newCart);
    };

    return (
            <div className="course-section">
                <div className="course-wrap">
                    {
                        courses.map(course => <Course handleAddCart={handleAddCart} course={course}></Course>)
                    }
                </div>
                <div className='cart-section'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
    );
};

export default Courses;