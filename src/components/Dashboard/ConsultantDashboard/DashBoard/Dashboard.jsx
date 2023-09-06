import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BiDollar } from "react-icons/bi";
import Jerome from "../../../../assets/media/icons/Home/Consultants/Jerome.png";

const Dashboard = () => {
  const tagDecoration = (tagName) => {
    if (tagName == "Travel") {
      return `bg-[#4C82F7] text-white`;
    } else if (tagName == "Admission") {
      return `bg-[#EF4444] text-white`;
    } else if (tagName == "Scholarship" || tagName == "Business") {
      return `bg-[#FFBA08] text-white`;
    } else if (tagName == "Visa") {
      return `bg-[#22C55E] text-white`;
    } else {
      return `bg-white`;
    }
  };
  return (
    <div className="mb-10">
      <h1 className="font-ManropeBold text-[30px] text-BrandGray900 my-10">
        Dashboard
      </h1>

      <h3 className="font-ManropeBold text-[20px] text-BrandGray800 my-3">
        Key Metrics
      </h3>
      <hr className="border border-BrandGray400" />

      <div className="flex gap-5 my-10">
        {/* Total Meeting */}
        <div className="w-[250px] flex  gap-5 items-center justify-center border rounded-lg h-[100px] border-BrandGray400 shadow-md cursor-pointerss">
          <span className="p-5 bg-BrandPrimary rounded-full text-white">
            <TfiHeadphoneAlt size={18} />
          </span>
          <div>
            <h5 className="font-ManropeBold text-[30px] text-BrandGray900">
              107
            </h5>
            <span className="font-ManropeRegular text-[12px] text-BrandGray900">
              Total Meetings
            </span>
          </div>
        </div>

        {/* Total Earnings */}
        <div className="w-[250px] flex  gap-5 items-center justify-center border rounded-lg h-[100px] border-BrandGray400 shadow-md cursor-pointerss">
          <span className="p-5 bg-BrandPrimary rounded-full text-white">
            <BiDollar size={18} />
          </span>
          <div>
            <h5 className="font-ManropeBold text-[30px] text-BrandGray900">
              $1,507
            </h5>
            <span className="font-ManropeRegular text-[12px] text-BrandGray900">
              Total Earnings
            </span>
          </div>
        </div>

        {/* Customers */}
        <div className="w-[250px] flex  gap-5 items-center justify-center border rounded-lg h-[100px] border-BrandGray400 shadow-md cursor-pointerss">
          <span className="p-5 bg-BrandPrimary rounded-full text-white">
            <BiDollar size={18} />
          </span>
          <div>
            <h5 className="font-ManropeBold text-[30px] text-BrandGray900">
              30
            </h5>
            <span className="font-ManropeRegular text-[12px] text-BrandGray900">
              Customers
            </span>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <h3 className="font-ManropeBold text-[20px] text-BrandGray800 my-3">
        Upcoming Appointments
      </h3>
      <hr className="border border-BrandGray400" />

      {/* Latest Reviews */}
      <h3 className="font-ManropeBold text-[20px] text-BrandGray800 my-3">
        Latest Reviews
      </h3>
      <hr className="border border-BrandGray400" />
      {/* Review */}
      <div className="py-5 border-b-[2px] border-BrandGray400">
        <p className="flex items-center font-ManropeSemiBold text-BrandGray800 gap-4">
          <span
            className={
              "bg-BrandGray200 rounded-md px-2 py-1 text-[13px] " +
              `${tagDecoration("Visa")}`
            }
          >
            Visa
          </span>
          <span className="text-[13px] border-l-2 px-2 border-BrandGray400">
            Jun 10, 2023
          </span>
        </p>
        <p className="text-BrandGray700 text-[15px] font-ManropeRegular py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur et
          mollitia doloremque accusamus tempora repellat vitae nihil dicta
          provident quas!
        </p>
        <div className="flex items-center gap-2 my-5">
          <figure>
            <img
              src={Jerome}
              alt="user"
              className="w-[40px] h-[40px] rounded-full"
            />
          </figure>
          <p className="font-ManropeSemiBold text-BrandGray900">John Doe</p>
        </div>
      </div>

      <div className="py-5 border-b-[2px] border-BrandGray400">
        <p className="flex items-center font-ManropeSemiBold text-BrandGray800 gap-4">
          <span
            className={
              "bg-BrandGray200 rounded-md px-2 py-1 text-[13px] " +
              `${tagDecoration("Admission")}`
            }
          >
            Admission
          </span>
          <span className="text-[13px] border-l-2 px-2 border-BrandGray400">
            Jun 10, 2023
          </span>
        </p>
        <p className="text-BrandGray700 text-[15px] font-ManropeRegular py-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur et
          mollitia doloremque accusamus tempora repellat vitae nihil dicta
          provident quas!
        </p>
        <div className="flex items-center gap-2 my-5">
          <figure>
            <img
              src={Jerome}
              alt="user"
              className="w-[40px] h-[40px] rounded-full"
            />
          </figure>
          <p className="font-ManropeSemiBold text-BrandGray900">John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
