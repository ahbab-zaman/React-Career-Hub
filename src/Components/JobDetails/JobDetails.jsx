import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
const details = useLoaderData();
console.log(details)
const params = useParams();
const findData = details.find(element => element.id == params.id) 
const {job_description, job_responsibility, educational_requirements, experiences} = findData 
console.log(findData)
    return (
        <div>
             <div className="bg-[#f8f8ff] py-12 mb-12">
                <h4 className="text-2xl font-bold text-center">Job Details</h4>
           </div>
           <div className="grid grid-cols-2 w-11/12 mx-auto">
               <div>
                <p>Job Description: {job_description}</p>
                <p>Job responsibility: {job_responsibility}</p>
               </div>
               <div></div>
           </div>
        </div>
    );
};

export default JobDetails;