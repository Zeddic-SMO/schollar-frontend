import { XCircle } from "react-feather";

const CreateOpportunities = ({ SetOpen }) => {
  return (
    <div className="bg-white p-10 rounded-xl w-[60%] h-[550px] relative">
      <XCircle
        size={30}
        className="absolute right-10 text-red-500 cursor-pointer"
        onClick={() => SetOpen(false)}
      />
      <div className="mb-10">
        <h1 className="text-[35px] font-ManropeExtraBold text-BrandGray900">
          Create Opportunity
        </h1>
        <h3 className="text-[16px] font-ManropeRegular text-BrandGray700">
          Provide details of the opportunity by filling the form below
        </h3>
      </div>

      {/* form */}
      <div className="max-h-[300px] overflow-y-auto">
        {/* Title */}
        <div className="pb-4">
          <label
            htmlFor="Title"
            className="block font-ManropeSemiBold text-[14px]"
          >
            Title
          </label>
          <input
            type="text"
            id="Title"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>

        {/* Deadline and category */}
        <div className="flex items-center gap-3 pb-4">
          <div className="w-1/2">
            <label
              htmlFor="Deadline"
              className="font-ManropeSemiBold text-[14px]"
            >
              Deadline
            </label>
            <input
              type="text"
              id="Deadline"
              className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="Category"
              className="font-ManropeSemiBold text-[14px] block"
            >
              Category
            </label>
            <select
              name=""
              id="category"
              className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
            >
              <option value="">Scholarship</option>
            </select>
          </div>
        </div>

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

        {/* Email */}
        <div className="pb-4">
          <label
            htmlFor="email"
            className="block font-ManropeSemiBold text-[14px]"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>

        {/*  Opportunity Description */}
        <div className="pb-4">
          <label
            htmlFor="Description"
            className="block font-ManropeSemiBold text-[15px]"
          >
            Opportunity Description
          </label>
          <textarea
            name="Description"
            id="Description"
            cols="30"
            rows="5"
            className="w-full rounded-md outline-none p-2 border-[1px] border-BrandGray400 text-BrandGray700"
          ></textarea>
        </div>

        {/* How to Apply */}
        <div className="pb-4">
          <label
            htmlFor="apply"
            className="block font-ManropeSemiBold text-[14px]"
          >
            How to Apply
          </label>
          <input
            type="text"
            id="apply"
            placeholder="Paste application link or email"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>

        {/* Deadline and category */}
        <div className="flex items-center gap-3 pb-4">
          <div className="w-1/2">
            <label
              htmlFor="Eligibility_Region"
              className="font-ManropeSemiBold text-[14px] block"
            >
              Eligibility Region
            </label>
            <select
              name=""
              id="Eligibility_Region"
              className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
            >
              <option value="">America</option>
              <option value="">Asia</option>
            </select>
          </div>

          <div className="w-1/2">
            <label
              htmlFor="Benefits"
              className="font-ManropeSemiBold text-[14px]"
            >
              Benefits
            </label>
            <input
              type="text"
              id="Benefits"
              placeholder="Salary, Price, Advantages, Scholarship value etc."
              className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
            />
          </div>
        </div>

        {/* Who is eligible to apply (Selection criteria) */}
        <div className="pb-4">
          <label
            htmlFor="Eligibilty"
            className="block font-ManropeSemiBold text-[14px]"
          >
            Eligibilty
          </label>
          <input
            type="text"
            id="Eligibilty"
            placeholder="Who is eligible to apply (Selection criteria)"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>

        {/* Fully, Partly or Non-funded or N/A */}
        <div className="pb-5">
          <label
            htmlFor="Funded"
            className="block font-ManropeSemiBold text-[14px]"
          >
            Funded?
          </label>
          <input
            type="text"
            id="Funded"
            placeholder="Fully, Partly or Non-funded or N/A"
            className="outline-none border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-full"
          />
        </div>

        {/* Upload Featured Image (JPEG/PNG/JPG) */}
        <div className="mb-5">
          <p className="font-ManropeSemiBold text-[14px]">
            Upload Featured Image (JPEG/PNG/JPG)
          </p>
          <label
            htmlFor="fileInput"
            className="border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 flex items-center justify-between"
          >
            <span className="font-ManropeRegular">
              Choose file to upload (Max 1MB)
            </span>
            <span className="bg-BrandGray200 px-5 py-1 rounded-md font-ManropeSemiBold text-BrandGray800">
              Browse file
            </span>
          </label>
          <input type="file" id="fileInput" className="hidden" />
        </div>

        {/* accept promotion ads subscription */}
        <div className="mb-5 flex items-center gap-3">
          <input type="checkbox" id="ads" />
          <label
            htmlFor="ads"
            className="font-ManropeSemiBold text-[14px] text-BrandGray700"
          >
            I would like to promote this Ad (Schollar will email pricing to you)
          </label>
        </div>

        {/* Submit button */}
        <button className="w-full bg-BrandPrimary py-2 text-center text-white rounded-md mpb-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default CreateOpportunities;
