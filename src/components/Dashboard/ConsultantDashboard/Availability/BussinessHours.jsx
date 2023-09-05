import { useState } from "react";
import { daysOfWeek, thirtyMinutesBooks } from "./AvailabilityData";

const BussinessHours = () => {
  const [enableBusinessHours, SetEnableBusinessHours] = useState(true);
  const [availability, setAvailability] = useState({
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: true,
    Fri: true,
    Sat: false,
    Sun: false,
  });

  const toggleAvailability = (day) => {
    setAvailability((prevAvailability) => ({
      ...prevAvailability,
      [day]: !prevAvailability[day],
    }));
  };
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
        <div className="w-[150px] pt-14">
          {daysOfWeek?.map((day, i) => {
            return (
              <div key={i} className="flex items-center gap-3 mb-10">
                <span className="w-[30px]">{day}</span>
                <div
                  className={
                    "w-[38px] h-[18px] rounded-lg p-[2px] bg-BrandGray300 flex justify-start cursor-pointer " +
                    `${availability[day] && "bg-BrandSecondary justify-end"}`
                  }
                >
                  <span
                    className="w-[15px] h-full bg-white rounded-full"
                    onClick={() => toggleAvailability(day)}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Time Section */}
        <div className="w-[600px] border p-5 rounded-lg shadow-lg">
          <div className="flex justify-between gap-5 mb-6">
            {/* From */}
            <div className="w-1/2">
              <label htmlFor="" className="block font-ManropeSemiBold mb-1">
                From
              </label>
              <select
                name="From"
                id=""
                className="outline-none border border-BrandGray400 p-2 rounded-md w-full"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>

            {/* To */}
            <div className="w-1/2 ">
              <label htmlFor="" className="block font-ManropeSemiBold mb-1">
                To
              </label>
              <select
                name="From"
                id=""
                className="w-full outline-none border border-BrandGray400 p-2 rounded-md"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Tuesday */}
          <div className="flex justify-between gap-5 mb-6">
            {/* From */}
            <div className="w-1/2">
              <select
                name="From"
                id=""
                className="outline-none border border-BrandGray400 p-2 rounded-md w-full"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>

            {/* To */}
            <div className="w-1/2 ">
              <select
                name="From"
                id=""
                className="w-full outline-none border border-BrandGray400 p-2 rounded-md"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Wednesday */}
          <div className="flex justify-between gap-5 mb-6">
            {/* From */}
            <div className="w-1/2">
              <select
                name="From"
                id=""
                className="outline-none border border-BrandGray400 p-2 rounded-md w-full"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>

            {/* To */}
            <div className="w-1/2 ">
              <select
                name="From"
                id=""
                className="w-full outline-none border border-BrandGray400 p-2 rounded-md"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Thursday */}
          <div className="flex justify-between gap-5 mb-6">
            {/* From */}
            <div className="w-1/2">
              <select
                name="From"
                id=""
                className="outline-none border border-BrandGray400 p-2 rounded-md w-full"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>

            {/* To */}
            <div className="w-1/2 ">
              <select
                name="From"
                id=""
                className="w-full outline-none border border-BrandGray400 p-2 rounded-md"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Friday */}
          <div className="flex justify-between gap-5 mb-6">
            {/* From */}
            <div className="w-1/2">
              <select
                name="From"
                id=""
                className="outline-none border border-BrandGray400 p-2 rounded-md w-full"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>

            {/* To */}
            <div className="w-1/2 ">
              <select
                name="From"
                id=""
                className="w-full outline-none border border-BrandGray400 p-2 rounded-md"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Saturday */}
          <div className="flex justify-between gap-5 mb-6">
            {/* From */}
            <div className="w-1/2">
              <select
                name="From"
                id=""
                className="outline-none border border-BrandGray400 p-2 rounded-md w-full"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>

            {/* To */}
            <div className="w-1/2 ">
              <select
                name="From"
                id=""
                className="w-full outline-none border border-BrandGray400 p-2 rounded-md"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Sunday */}
          <div className="flex justify-between gap-5 mb-6">
            {/* From */}
            <div className="w-1/2">
              <select
                name="From"
                id=""
                className="outline-none border border-BrandGray400 p-2 rounded-md w-full"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>

            {/* To */}
            <div className="w-1/2 ">
              <select
                name="From"
                id=""
                className="w-full outline-none border border-BrandGray400 p-2 rounded-md"
              >
                {thirtyMinutesBooks?.map((item, index) => {
                  return <option key={index}>{item}</option>;
                })}
              </select>
            </div>
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
