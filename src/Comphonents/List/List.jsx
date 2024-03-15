/* eslint-disable react/prop-types */


const List = ({list,id,handleDelete}) => {
    const {Title} = list;
    console.log(list)
    return (
        <div>
            <ol className="my-4">
                <li>{id +1}. {Title} <button onClick={()=>handleDelete(list)} className="bg-red-400 p-2 rounded text-white">Delete</button></li>
            </ol>
        
        </div>
    );
};

export default List;