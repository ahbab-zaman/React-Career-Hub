import Category from "../Category/Category";
import Jobs from "../Jobs/Jobs";

const Statistics = () => {
  return (
    <div>
      <div className="hero bg-[#f8f8ff]">
        <div className="hero-content w-11/12 mx-auto flex-col lg:flex-row-reverse">
          <div>
            <img className="w-full -mb-4" src="./images/user.png" />
          </div>
          <div>
            <h1 className="text-6xl font-bold">
              One Step <br />
              Closer TO Your <br />
              <span className="text-[#8688ff]">Dream Job</span>
            </h1>
            <p className="py-6 text-sm text-gray-500 w-3/4">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="btn btn-info text-white font-bold">Get Started</button>
          </div>
        </div>
      </div>
      <Category></Category>

      <Jobs></Jobs>

    </div>
  );
};

export default Statistics;
