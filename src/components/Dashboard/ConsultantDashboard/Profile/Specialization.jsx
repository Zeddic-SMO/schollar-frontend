const Specialization = () => {
  return (
    <>
      {/* Country and Program */}
      <div className="flex  items-center gap-3 mb-10">
        <div className="w-1/2">
          <label htmlFor="country" className="font-ManropeSemiBold text-[14px]">
            Country
          </label>
          <select
            name=""
            id="country"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          >
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <div className="w-1/2">
          <label htmlFor="Program" className="font-ManropeSemiBold text-[14px]">
            Program
          </label>
          <select
            name="Program"
            id="Program"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          >
            <option value="">MSc</option>
            <option value="">PhD</option>
            <option value="">Undergraduate</option>
            <option value="">Others</option>
          </select>
        </div>
      </div>

      {/* Application Stage and Experience */}
      <div className="flex  items-center gap-3 mb-10">
        <div className="w-1/2">
          <label
            htmlFor="ApplicationStage"
            className="font-ManropeSemiBold text-[14px]"
          >
            Application Stage
          </label>
          <select
            name=""
            id="ApplicationStage"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          >
            <option value="Admission">Admission</option>
            <option value="Visa">Visa</option>
            <option value="Travel">Travel</option>
            <option value="Scholarships">Scholarships</option>
          </select>
        </div>

        <div className="w-1/2">
          <label
            htmlFor="Experience"
            className="font-ManropeSemiBold text-[14px]"
          >
            Experience
          </label>
          <select
            name="Experience"
            id="Experience"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          >
            <option value="">Less than 1 Year</option>
            <option value="">2 Years</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
      <div className="font-ManropeRegular text-[14px] flex items-center gap-5 pb-10 mb-5 border-b">
        <button className="bg-BrandGray200 py-2 px-3 rounded-lg">Cancel</button>
        <button className="bg-BrandPrimary py-2 px-3 rounded-lg text-white">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default Specialization;
