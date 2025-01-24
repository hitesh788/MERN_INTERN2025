import CoE from "./CoE";
const Faculty=(res) =>{
    return (
        <div>
            <h4>Paper correction is in process</h4>
            <CoE sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Faculty;