import { IoLocationOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { Link } from "react-router-dom";

const ApplyJob = ({ applyJob }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id
  } = applyJob;

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center justify-around space-x-8 border rounded-xl p-4">
        <div>
          <img className="w-[150px]" src={logo} alt="" />
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-bold">{job_title}</h4>
            <p className="text-sm text-gray-500">{company_name}</p>
          </div>
          <div className="flex items-start gap-4">
            <button className="px-3 py-1 border-2 border-blue-700 text-blue-700 ">
              {remote_or_onsite}
            </button>
            <button className="px-3 py-1 border-2 border-blue-700 text-blue-700">
              {job_type}
            </button>
          </div>
          <div className="flex justify-between gap-4">
            <span className="flex items-center gap-1">
              <IoLocationOutline></IoLocationOutline> {location}
            </span>

            <span className="flex items-center gap-1">
              <LuCircleDollarSign></LuCircleDollarSign>
              {salary}
            </span>
          </div>
        </div>

        <div className="card-actions">
          <Link to={`/applyJob/${id}`}>
            <button className="btn btn-info text-white font-bold">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ApplyJob;
