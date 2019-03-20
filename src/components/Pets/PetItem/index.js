import React from 'react';

export default function PetItem(props){

  const {animal, person, date, time, text, handleDelete, index} = props;

  return (
    <li>
      <div className="float-right">{date} {time}</div>
      <h3>
        <span className="mr-2">{animal}</span> 
        <button 
          className="btn btn-danger btn-sm"
          onClick={() => { handleDelete(index)}}>
          Удалить
        </button>
      </h3>
      <h5>{person}</h5>
      <p>{text}</p>
    </li>
  );
}