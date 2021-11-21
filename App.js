import React from 'react';
import ReactDOM from 'react-dom';
import MedicalTreatments from './MedicalTreatments';

function App(){
  return(
    <div>
    < MedicalTreatments treatId = 'blahblah' treatCourseId ='hdhdhd' />
    < MedicalTreatments treatId = 'jjhiohi' treatCourseId ='hiohioi'/>
     </div>
  );
}


ReactDOM.render (
<App />,
document.getElementById('root')
);






