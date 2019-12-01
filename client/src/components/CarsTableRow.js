import React from 'react';

const CarsTableRow = (props)=>{
    const{carMaker,carModel,carColor,carPrice,_id}= props.cars;
return(
    <tr>
      <th scope="row">1</th>
<td>{carMaker}</td>
<td>{carModel}</td>
<td>{carColor}</td>
<td>{carPrice}</td>
    </tr>
)

}