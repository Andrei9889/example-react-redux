import React from 'react';

import PetItem from '../PetItem';

export default function PetsList(props){
  const {arr, handleDelete} = props;

  return (
      <ul className="list">
        {arr.map((pet,index) => {
          return (
            <PetItem key={index} {...pet} index={index} handleDelete={handleDelete}/>
          )
        })}
      </ul>
  );
}