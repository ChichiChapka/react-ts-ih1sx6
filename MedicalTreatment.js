import React from 'react';
import ReactDOM from 'react-dom';
function MedicalTreatments (prop){

    return (
      <div>
        <ul> MedicalTreatments treatId = {prop.treatId} ,treatCourseId =
     {prop.treatCourseId}, type = {prop.type}, category ={prop.category},
      name = {prop.name }, startDate = {prop.startDate} </ul>
      </div>
  );
  }
  export default MedicalTreatments ;


