import { IoLocationOutline } from 'react-icons/io5';
import { LuCircleDollarSign } from "react-icons/lu";



const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    salary,
    job_type,
  } = job;
  console.log(logo);
  return (
    <div className="">
      <div className="card items-start shadow-xl p-4 h-[335px]">
        <figure className="bg-white">
          <img className="w-[150px]"
            src={logo}
            alt="logo"
          />
        </figure>
        <div className="card-body px-2 py-3">
          <h2 className="card-title">{job_title}</h2>
          <p className="text-gray-500 text-sm">{company_name}</p>
          <div className="flex items-start gap-4">
            <button className="px-3 py-1 border-2 border-blue-700 text-blue-700 ">{remote_or_onsite}</button>
            <button className="px-3 py-1 border-2 border-blue-700 text-blue-700">{job_type}</button>
          </div>
          <div className='flex justify-between gap-4'>
          <span className='flex items-center gap-1'><IoLocationOutline></IoLocationOutline> {location}</span>

          <span className='flex items-center gap-1'><LuCircleDollarSign></LuCircleDollarSign>{salary}</span>

          </div>
          <div className="card-actions">
            <button className="btn btn-info text-white font-bold">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
