import { useState } from "react";
import "./App.css";
import Courses from "./Comphonents/Cources/Courses";
import Lists from "./Comphonents/Lists/Lists";
// import { split } from "postcss/lib/list";

function App() {

  ////   store single course data 
  const [course1,setCourse] = useState([]);
  const [price,setPrice] = useState(0)
  console.log(price);
  ////   handle select button 
  const handleSelect = (course,Price) =>{
    console.log(Price)
    const isExist = course1.find(f => f.id === course.id)
    if(!isExist){
      const copyCourse = [...course1,course]
      setCourse(copyCourse)
      setPrice(price + Price);
    }
    else{
      alert('already exists')
    }
  }

  const handleDelete = (d) => {
    const removing = course1.filter(remove => remove.id !== d.id)
    setCourse(removing)
    console.log(removing)
  }

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <p className="text-3xl font-bold text-center">
          Programming Courses are here. Now choose your best choice
        </p>
        <div className="md:grid grid-cols-12 gap-5">
          <div className="md:col-span-8">
            <Courses handleSelect={handleSelect}></Courses>
          </div>
          <div className="md:col-span-4">
            <Lists course1={course1} handleDelete={handleDelete} price={price}></Lists>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
