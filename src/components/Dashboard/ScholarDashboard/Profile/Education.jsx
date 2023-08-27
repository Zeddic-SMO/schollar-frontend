const Education = () => {
  return (
    <div>
      {/* Education and Program of Interest */}
      <div className="flex  items-center gap-3 pb-4">
        <div className="w-1/2">
          <label
            htmlFor="qualification"
            className="font-ManropeSemiBold text-[14px]"
          >
            Highest Qualification
          </label>
          <select
            name=""
            id="qualification"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          >
            <option value="">High School</option>
            <option value="">B.Sc</option>
            <option value="">M.Sc</option>
            <option value="">PhD</option>
          </select>
        </div>

        <div className="w-1/2">
          <label htmlFor="program" className="font-ManropeSemiBold text-[14px]">
            Program of Interest
          </label>
          <select
            name=""
            id="program"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          >
            <option value="">B.Sc</option>
            <option value="">M.Sc</option>
            <option value="">PhD</option>
          </select>
        </div>
      </div>

      {/* Country and Course of Interest*/}
      <div className="flex  items-center gap-3 pb-4">
        <div className="w-1/2">
          <label
            htmlFor="countryOfInterest"
            className="font-ManropeSemiBold text-[14px]"
          >
            Country of Interest
          </label>
          <select
            name=""
            id="countryOfInterest"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          >
            <option value="">USA</option>
            <option value="">Canada</option>
            <option value="">UK</option>
          </select>
        </div>

        <div className="w-1/2">
          <label
            htmlFor="courseOfInterest"
            className="font-ManropeSemiBold text-[14px]"
          >
            Course of Interest
          </label>
          <input
            type="text"
            id="courseOfInterest"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>
      </div>

      {/* Support Message */}
      <div className="pb-4">
        <label
          htmlFor="supportMessage"
          className="block font-ManropeSemiBold text-[15px]"
        >
          Support Message
        </label>
        <textarea
          name="supportMessage"
          id="supportMessage"
          cols="30"
          rows="2"
          className="w-full rounded-md outline-none p-2 border-[1px] border-BrandGray400 text-BrandGray700"
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="font-ManropeRegular text-[14px] flex items-center gap-5 pb-10 mb-5 border-b">
        <button className="bg-BrandGray200 py-2 px-3 rounded-lg">Cancel</button>
        <button className="bg-BrandPrimary py-2 px-3 rounded-lg text-white">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Education;
