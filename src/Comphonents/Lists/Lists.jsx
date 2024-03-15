/* eslint-disable react/prop-types */

import List from "../List/List";

// eslint-disable-next-line react/prop-types
const Lists = ({ course1, price,handleDelete }) => {
  const p = price.toFixed(2);
  const r = course1.reduce((p,c)=> p + c.Time,0)
//   if(r > 20){
//      alert('enough')
//   }
  console.log(r);
  return (
    <div className="">
      <p className="text-2xl font-bold mt-7">Courses Name : </p>
      <div>
        {course1.map((list, id) => (
          <List key={id} id={id} list={list} handleDelete={handleDelete}></List>
        ))}
      </div>
      <hr />
      <div>
        <p className="text-xl font-bold">
          Total Reading Time : <span>{r} </span>
        </p>
        <hr className=" my-4" />
        <p className="text-xl font-bold">
          Total Price : <span>{p} </span>USD
        </p>
      </div>
    </div>
  );
};

export default Lists;
