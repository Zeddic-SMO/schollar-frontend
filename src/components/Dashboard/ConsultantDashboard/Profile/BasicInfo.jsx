const BasicInfo = () => {
  return (
    <div>
      {/* First and Last Name */}
      <div className="flex  items-center gap-3 pb-4">
        <div className="w-1/2">
          <label
            htmlFor="firstname"
            className="font-ManropeSemiBold text-[14px]"
          >
            First name
          </label>
          <input
            type="text"
            id="firstname"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>

        <div className="w-1/2">
          <label
            htmlFor="lastname"
            className="font-ManropeSemiBold text-[14px]"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastname"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>
      </div>

      {/* Email and Phone */}
      <div className="flex  items-center gap-3 pb-4">
        <div className="w-1/2">
          <label htmlFor="email" className="font-ManropeSemiBold text-[14px]">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>

        <div className="w-1/2">
          <label htmlFor="phone" className="font-ManropeSemiBold text-[14px]">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>
      </div>

      {/* Career Need */}
      <div className="pb-4">
        <label htmlFor="Bio" className="block font-ManropeSemiBold text-[15px]">
          Bio (Optional)
        </label>
        <textarea
          name="Bio"
          id="Bio"
          placeholder="Add a short bio..."
          cols="30"
          rows="5"
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

export default BasicInfo;
