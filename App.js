import React from 'react';
import ReactDOM from 'react-dom';
import MedicalTreatments from './MedicalTreatments';

function TaskOne(){
  return(
    <div>
    < MedicalTreatments treatId = 'blahblah' treatCourseId ='hdhdhd' />
    < MedicalTreatments treatId = 'jjhiohi' treatCourseId ='hiohioi'/>
     </div>
  );
}
export default App;

ReactDOM.render (
<TaskOne />,
document.getElementById('root')
);






