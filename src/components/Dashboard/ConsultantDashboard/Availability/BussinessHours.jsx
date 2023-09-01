import { useState } from "react";

const BussinessHours = () => {
  const [enableBusinessHours, SetEnableBusinessHours] = useState(true);
  const [Availability, setAvailability] = useState({
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: true,
    Fri: true,
    Sat: false,
    Sun: false,
  });

  const availablityDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <>
      {/* Enable Business Hours */}
      <div className="flex justify-between items-center border-b-[1px] pb-5 mb-10 border-BrandGray400">
        <div>
          <h6 className="font-ManropeBold text-BrandGray900">Enable</h6>
          <p className="font-ManropeRegular text-BrandGray700 text-[14px]">
            Quick enable or disable business hours
          </p>
        </div>
        <div
          className={
            "w-[38px] h-[18px] rounded-lg p-[2px] bg-BrandGray300 flex justify-start cursor-pointer " +
            `${enableBusinessHours && "bg-BrandSecondary justify-end"}`
          }
        >
          <span
            className="w-[15px] h-full bg-white rounded-full"
            onClick={() => SetEnableBusinessHours((prevMode) => !prevMode)}
          ></span>
        </div>
      </div>

      {/* Set Time Zone */}
      <div className="border-b-[1px] pb-5 mb-10 border-BrandGray400">
        <label htmlFor="TimeZone">Set Time Zone</label>
        <select
          name="TimeZone"
          id="TimeZone"
          className="w-full text-BrandGray700 font-ManropeRegular border p-[8px] rounded-md text-[14px] outline-none"
        >
          <option value="">(UTC-08:00) Pacific Time</option>
        </select>
      </div>

      {/* Availability Times */}
      <div className="mb-10 flex">
        {/* Days Section */}
        <div className="w-[100px]">
          {availablityDays?.map((day, i) => {
            return (
              <div key={i} className="flex items-center gap-3 mb-5">
                <span className="w-[30px]">{day}</span>
                <div
                  className={
                    "w-[38px] h-[18px] rounded-lg p-[2px] bg-BrandGray300 flex justify-start cursor-pointer " +
                    `${Availability.day && "bg-BrandSecondary justify-end"}`
                  }
                >
                  <span
                    className="w-[15px] h-full bg-white rounded-full"
                    onClick={() =>
                      setAvailability((prevMode) => ({
                        ...prevMode,
                        day: !prevMode.day,
                      }))
                    }
                  ></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Time Section */}
        <div className="w-[500px]">
          <div className="flex justify-between gap-5">
            <select
              name="From"
              id=""
              className="w-1/2 outline-none border py-1 px-2 rounded-md"
            >
              <option value="09:00AM">09:00AM</option>
            </select>

            <select
              name="From"
              id=""
              className="w-1/2 outline-none border py-1 px-2 rounded-md"
            >
              <option value="09:00AM">09:00AM</option>
            </select>
          </div>
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

export default BussinessHours;
