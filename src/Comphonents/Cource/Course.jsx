/* eslint-disable react/prop-types */

import { FaBookmark } from "react-icons/fa";
const Course = ({course,handleSelect}) => {
    const {Image,Price,Time,Title,Paragraph} = course;
    return (
        <div>
             <div className="card card-compact  shadow-xl border p-3 rounded">
              <figure>
                <img className="h-[150px]  md:h-[200px] w-full"
                  src={Image}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body h-[300px]">
               <div>
               <h2 className="card-title"></h2>
                <p className="text-2xl font-semibold text-center">{Title}</p>
                <p className="my-5 text-gray-500">{Paragraph}</p>
                  
                <div className="flex justify-around">
                    <p>Price $ {Price}</p>
                    <div className="flex gap-2">
                    <FaBookmark /> <p>Credit : {Time} hr</p>
                    </div>
                </div>
                <div className=" mt-4 text-center text-white ">
                  <button onClick={()=>handleSelect(course,Price)} id="setAlert"  className="btn btn-primary bg-blue-800 w-full py-2 rounded">Select</button>
                </div>
               </div>
              </div>
            </div>
        </div>
    );
};
// onClick={()=>handleButton(oli)}
export default Course;