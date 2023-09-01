const Address = () => {
  return (
    <div>
      {/* Country and State of residence */}
      <div className="flex  items-center gap-3 pb-4">
        <div className="w-1/2">
          <label htmlFor="country" className="font-ManropeSemiBold text-[14px]">
            Country of Residence
          </label>
          <select
            name=""
            id="country"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          >
            <option value="">Nigeria</option>
            <option value="">Ghana</option>
            <option value="">Cameroon</option>
          </select>
        </div>

        <div className="w-1/2">
          <label htmlFor="state" className="font-ManropeSemiBold text-[14px]">
            State
          </label>
          <select
            name=""
            id="state"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          >
            <option value="">Benue</option>
            <option value="">Enugu</option>
            <option value="">Lagos</option>
          </select>
        </div>
      </div>

      {/* City and Zip Code*/}
      <div className="flex  items-center gap-3 pb-4">
        <div className="w-1/2">
          <label htmlFor="City" className="font-ManropeSemiBold text-[14px]">
            City
          </label>
          <input
            type="text"
            id="City"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="zipCode" className="font-ManropeSemiBold text-[14px]">
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>
      </div>

      {/* Address */}
      <div className="pb-4">
        <label
          htmlFor="Address"
          className="block font-ManropeSemiBold text-[15px]"
        >
          Address
        </label>
        <textarea
          name="Address"
          id="Address"
          cols="30"
          rows="3"
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

export default Address;
