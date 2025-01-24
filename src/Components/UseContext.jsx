import Invigilator from "./ContextComponent/Invigilator";

const Student = () => {
    return (
        <div>
            <h2>This is example of UseContext hook which is the alternative for props drilling</h2>
            <h3>Student are writing their exam</h3>
            <Invigilator sgpa="9.5" cgpa="6.5"/>
       </div>
    );

};
export default Student;