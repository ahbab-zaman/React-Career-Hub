import { useLoaderData, useParams } from "react-router-dom";
import { AiTwotoneDollar } from "react-icons/ai";
import { PiSubtitlesBold } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const JobDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const params = useParams();
  const findData = details.find((element) => element.id == params.id);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = findData;

  return (
    <div>
      <div className="bg-[#f8f8ff] py-12 mb-12">
        <h4 className="text-2xl font-bold text-center">Job Details</h4>
      </div>
      <div className="grid grid-cols-2 gap-8 w-11/12 mx-auto py-8">
        <div className="space-y-2">
          <p className="text-lg font-semibold">
            Job Description:{" "}
            <span className="text-sm text-gray-500">{job_description}</span>
          </p>
          <p className="text-lg font-semibold">
            Job responsibility:{" "}
            <span className="text-sm text-gray-500">{job_responsibility}</span>
          </p>
          <p>
            Educational requirements:{" "}
            <span className="text-sm text-gray-500">
              {educational_requirements}
            </span>
          </p>
          <p>
            Experiences :{" "}
            <span className="text-sm text-gray-500">{experiences}</span>
          </p>
        </div>
        <div className="space-y-2 bg-[#f5f5fd] p-4 rounded-xl">
          <h4 className="text-lg font-bold">Job Details</h4>
          <div className="border"></div>
          <div className="flex items-center text-lg font-semibold gap-3">
            <AiTwotoneDollar></AiTwotoneDollar> Salary : {salary} (Per month)
          </div>
          <div className="flex items-center text-lg font-semibold gap-3">
            <PiSubtitlesBold></PiSubtitlesBold>
            Job Title : {job_title}
          </div>
          <h4 className="text-lg font-bold">Contact Information</h4>
          <div className="border"></div>
          <div className="flex items-center text-lg font-semibold gap-3">
            <FaPhoneAlt></FaPhoneAlt>
            Phone : {contact_information.phone}
          </div>

          <div className="flex items-center text-lg font-semibold gap-3">
            <HiOutlineMail></HiOutlineMail>
            Email : {contact_information.email}
          </div>

          <div className="flex items-center text-lg font-semibold gap-3">
            <CiLocationOn></CiLocationOn>
            Location : {contact_information.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
