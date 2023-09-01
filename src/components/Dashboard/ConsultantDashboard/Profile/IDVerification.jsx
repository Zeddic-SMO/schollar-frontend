const IDVerification = () => {
  return (
    <div>
      {/* Id Type and ID Number */}
      <div className="flex  items-center gap-3 pb-4">
        <div className="w-1/2">
          <label htmlFor="IDType" className="font-ManropeSemiBold text-[14px]">
            ID Type
          </label>
          <select
            name=""
            id="IDType"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          >
            <option value="">International Passport</option>
            <option value="">National Identity Number</option>
          </select>
        </div>
        <div className="w-1/2">
          <label
            htmlFor="IdNumber"
            className="font-ManropeSemiBold text-[14px]"
          >
            ID Number
          </label>
          <input
            type="text"
            id="IdNumber"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>
      </div>

      {/* Date Issued and Expiry Date */}
      <div className="flex  items-center gap-3 pb-4">
        <div className="w-1/2">
          <label
            htmlFor="DateIssued"
            className="font-ManropeSemiBold text-[14px]"
          >
            Date Issued
          </label>
          <input
            type="text"
            id="DateIssued"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>

        <div className="w-1/2">
          <label
            htmlFor="ExpiryDate"
            className="font-ManropeSemiBold text-[14px]"
          >
            Expiry Date
          </label>
          <input
            type="text"
            id="ExpiryDate"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>
      </div>

      {/* Upload Featured Image (JPEG/PNG/JPG) */}
      <div className="mb-10">
        <p className="font-ManropeSemiBold text-[14px]">
          Upload ID Photo (JPEG/PNG/JPG)
        </p>
        <label
          htmlFor="fileInput"
          className="border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 flex items-center justify-between"
        >
          <span className="font-ManropeRegular">
            Choose file to upload (Max 1MB)
          </span>
          <span className="bg-BrandGray200 px-5 py-2 cursor-pointer rounded-md font-ManropeSemiBold text-BrandGray800">
            Browse file
          </span>
        </label>
        <input type="file" id="fileInput" className="hidden" />
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

export default IDVerification;
