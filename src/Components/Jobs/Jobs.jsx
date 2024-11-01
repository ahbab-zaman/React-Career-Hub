import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const Jobs = () => {
    const [jobs, setJobs] = useState([])
    useEffect(()=>{
        fetch('./jobs.json')
        .then(response=> response.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div className="w-11/12 mx-auto">
            <div className="space-y-2">
           <h3 className="text-4xl font-semibold text-center">Featured Jobs</h3>
           <p className="text-sm text-gray-500 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
           </div>

           <div className="py-6">
                <div className="grid grid-cols-2 gap-6">
                    {
                        jobs.map(job=> <Job key={job.id} job={job}></Job>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Jobs;