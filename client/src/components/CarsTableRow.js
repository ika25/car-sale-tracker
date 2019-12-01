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
<td>
<div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" onClick={props.showEditForm.bind(this,props.cars)} className="btn btn-secondary">Edit</button>
  <button type="button" onClick={props.deleteHandler.bind(this,_id)} className="btn btn-danger">Delete</button>
  
</div>
</td>
    </tr>
)

}

export default CarsTableRow;