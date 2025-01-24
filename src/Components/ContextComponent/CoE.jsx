import ExamResult from "./ExamResult";

const CoE = (res) => {
    return (
        <div>
            <h3>Mark publishing is in process</h3>
            <h5>Mark published</h5>
            <ExamResult sgpa={res.sgpa} cgpa={res.cgpa} />
        </div>
    )
}
export default CoE;