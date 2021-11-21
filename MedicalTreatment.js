import React from 'react';
import ReactDOM from 'react-dom';
function Treatments (prop){

    return (
      <div>
        <ul>Treatemnts: treatId = {prop.treatId} ,treatCourseId =
     {prop.treatCourseId}, type = {prop.type}, category ={prop.category},
      name = {prop.name }, startDate = {prop.startDate}; </ul>
      </div>
  );
  }
  

