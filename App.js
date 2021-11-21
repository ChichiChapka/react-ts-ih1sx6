import React from 'react';
import ReactDOM from 'react-dom';
import Treatments from './MedicalTreatments';

function App(){
  return(
    <div>
    < Treatments treatId = 'blahblah' treatCourseId ='hdhdhd' />
    < Treatments treatId = 'jjhiohi' treatCourseId ='hiohioi'/>
     </div>
  );
}
export default App;

ReactDOM.render (<App />,
document.getElementById ('root')
);





