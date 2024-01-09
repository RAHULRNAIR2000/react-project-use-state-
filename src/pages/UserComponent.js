import { useParams } from "react-router-dom";
import React from 'react';

export const UserComponent = () => {
    const params= useParams();
    const { id } = useParams();
  return (
    <div>
        <h2> USER ID: {params.id}</h2>
        <h2> USER ID: {id}</h2>
    </div>
  )
}
export default UserComponent;
