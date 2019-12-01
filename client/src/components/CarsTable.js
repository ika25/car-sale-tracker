import React from 'react';
import CarsTableRow from './CarsTableRow';

const CarsTable = (props)=>{
    return(
        <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Car Maker</th>
      <th scope="col">Car Model</th>
      <th scope="col">Car Color</th>
      <th scope="col">Car Price</th>
    </tr>
  </thead>
  <tbody>
  {props.car.map(Cars=>{
                   return <CarsTableRow key={Cars._id}
                    Cars={Cars}
                    deleteHandler={props.deleteHandler}
                    showEditForm={props.showEditForm}/>
               })}
  </tbody>
</table>
       
    )
}
export default CarsTable;