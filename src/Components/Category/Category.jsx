const Category = () => {
    return (
        <div className="w-11/12 mx-auto py-12">
           <div className="space-y-2">
           <h3 className="text-4xl font-semibold text-center">Job Category List</h3>
           <p className="text-sm text-gray-500 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>

           <div className="grid grid-cols-4 gap-6 py-6">
            <div className="bg-[#f8f8ff] space-y-3 p-6">
                <img src="./icons/accounts.png" alt="" />
                <h5 className="text-lg font-bold">Accounts and Finance</h5>
                <p className="text-sm text-gray-500">200 jobs available</p>
            </div>

            <div className="bg-[#f8f8ff] space-y-3 p-6">
                <img src="./icons/creative.png" alt="" />
                <h5 className="text-lg font-bold">Accounts and Finance</h5>
                <p className="text-sm text-gray-500">200 jobs available</p>
            </div>

            <div className="bg-[#f8f8ff] space-y-3 p-6">
                <img src="./icons/marketing.png" alt="" />
                <h5 className="text-lg font-bold">Accounts and Finance</h5>
                <p className="text-sm text-gray-500">200 jobs available</p>
            </div>

            <div className="bg-[#f8f8ff] space-y-3 p-6">
                <img src="./icons/chip.png" alt="" />
                <h5 className="text-lg font-bold">Accounts and Finance</h5>
                <p className="text-sm text-gray-500">200 jobs available</p>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Category;