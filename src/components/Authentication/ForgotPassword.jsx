import Header from "../Navigation/Header";

const ForgotPassword = () => {
  return (
    <>
      <Header />
      <div className="bg-[#f3effe]">
        <div className="px-10 md:px-40 py-20 relative h-[500px]">
          <div className="flex justify-center items-center mt-[100px]">
            <div className="flex border border-[#f3effe] rounded-lg h-[45px] w-[400px] bg-white overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Enter your email address"
                className="outline-none w-[90%] bg-transparent h-full px-5"
              />
              <button className="bg-BrandPrimary px-3 text-white h-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[12px] absolute bottom-2 w-full text-BrandGray600 font-ManropeRegular">
        <p className="flex justify-center">
          {new Date().getFullYear()}. All rights reserved. Schollar.net. Powered
          By Maxify Global
        </p>
      </div>
    </>
  );
};

export default ForgotPassword;
