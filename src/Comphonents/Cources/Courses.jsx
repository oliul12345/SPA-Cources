/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Course from "../Cource/Course";

const Courses = ({handleSelect}) => {
    const [courses,setCourses] = useState([])

    // console.log(courses)

    useEffect(() => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[]);

 
    return (
        <div>
            <p className="text-2xl font-semi-bold mt-7">courses length : {courses.length}</p>

            <div className="grid md:grid-cols-3">
                {
                    courses.map((course,id) => <Course
                     key={id} 
                     course={course}
                     handleSelect={handleSelect}
                     ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;