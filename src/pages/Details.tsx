import React from 'react';
import { useParams } from 'react-router-dom';



export default function Detail(){
  const params = useParams()
  const id = params.id;
  return (
    <div>
      <h1>Detail - {id}</h1>
    </div>
  )
}