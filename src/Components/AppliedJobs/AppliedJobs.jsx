import { useEffect, useState } from "react";
import ApplyJob from "../ApplyJob/ApplyJob";
const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([])
    useEffect(()=>{
        fetch('./jobs.json')
        .then(response=> response.json())
        .then(data=> setAppliedJobs(data))
    },[])
    return (
        <div>
           <div className="bg-[#f8f8ff] py-12">
                <h4 className="text-2xl font-bold text-center">Applied Jobs</h4>
           </div>

           <div className="py-12 space-y-4 ">
            {
                appliedJobs.map(applyJob=> <ApplyJob applyJob={applyJob}></ApplyJob>)
            }
           </div>
        </div>
    );
};

export default AppliedJobs;