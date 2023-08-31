import { useState } from "react";
import { BellOff, Plus } from "react-feather";

const Notification = () => {
  const [mode, setMode] = useState({
    activityUpdates: true,
    infoLetters: false,
    accountActivity: true,
    promotions: false,
    dailySummary: false,
  });
  return (
    <div>
      {/* pause notification */}
      <div className="flex justify-end">
        <div className="flex gap-3 text-red-500 border border-red-200 items-center rounded-md px-2 py-1 cursor-pointer hover:bg-red-400 hover:text-white">
          <span>
            <BellOff size={15} />
          </span>
          <span>Pause all notifications</span>
        </div>
      </div>

      {/* preferred email */}
      <div className="mb-10">
        <label
          htmlFor="email"
          className="block font-ManropeSemiBold text-[16px] pt-5 pb-2"
        >
          Preferred email
        </label>
        <div className="flex gap-5">
          <select
            name="email"
            id="email"
            className="border p-2 w-1/2 rounded-md px-3"
          >
            <option value="example@gmail.com">example@gmail.com</option>
          </select>
          <div className="flex items-center text-BrandPrimary font-ManropeRegular cursor-pointer">
            <Plus />
            <span>Add new email</span>
          </div>
        </div>
      </div>

      {/* Activity updates */}
      <div className="mb-10 flex items-center gap-5">
        <div
          className={
            "w-[38px] h-[18px] rounded-lg p-[2px] bg-BrandGray300 flex justify-start cursor-pointer " +
            `${mode.activityUpdates && "bg-BrandSecondary justify-end"}`
          }
        >
          <span
            className="w-[15px] h-full bg-white rounded-full"
            onClick={() =>
              setMode((prevMode) => ({
                ...prevMode,
                activityUpdates: !prevMode.activityUpdates,
              }))
            }
          ></span>
        </div>
        <div>
          <h6 className="text-BrandGray900 font-ManropeBold">
            Activity Updates
          </h6>
          <p className="text-[14px] font-ManropeRegular text-BrandGray600">
            Nec, posuere non felis duis massa vitae aliquet interdum
            scelerisque. Neque ullamcorper.
          </p>
        </div>
      </div>

      {/* Info letters from our partners */}
      <div className="mb-10 flex items-center gap-5">
        <div
          className={
            "w-[38px] h-[18px] rounded-lg p-[2px] bg-BrandGray300 flex justify-start cursor-pointer " +
            `${mode.infoLetters && "bg-BrandSecondary justify-end"}`
          }
        >
          <span
            className="w-[15px] h-full bg-white rounded-full"
            onClick={() =>
              setMode((prevMode) => ({
                ...prevMode,
                infoLetters: !prevMode.infoLetters,
              }))
            }
          ></span>
        </div>
        <div>
          <h6 className="text-BrandGray900 font-ManropeBold">
            Info letters from our partners
          </h6>
          <p className="text-[14px] font-ManropeRegular text-BrandGray600">
            Tortor massa porttitor enim tristique neque fermentum sed.
          </p>
        </div>
      </div>

      {/* Account activity */}
      <div className="mb-10 flex items-center gap-5">
        <div
          className={
            "w-[38px] h-[18px] rounded-lg p-[2px] bg-BrandGray300 flex justify-start cursor-pointer " +
            `${mode.accountActivity && "bg-BrandSecondary justify-end"}`
          }
        >
          <span
            className="w-[15px] h-full bg-white rounded-full"
            onClick={() =>
              setMode((prevMode) => ({
                ...prevMode,
                accountActivity: !prevMode.accountActivity,
              }))
            }
          ></span>
        </div>
        <div>
          <h6 className="text-BrandGray900 font-ManropeBold">
            Account activity
          </h6>
          <p className="text-[14px] font-ManropeRegular text-BrandGray600">
            Maecenas aenean porta sit integer a duis commodo massa pulvinar.
          </p>
        </div>
      </div>

      {/* promotions */}
      <div className="mb-10 flex items-center gap-5">
        <div
          className={
            "w-[38px] h-[18px] rounded-lg p-[2px] bg-BrandGray300 flex justify-start cursor-pointer " +
            `${mode.promotions && "bg-BrandSecondary justify-end"}`
          }
        >
          <span
            className="w-[15px] h-full bg-white rounded-full"
            onClick={() =>
              setMode((prevMode) => ({
                ...prevMode,
                promotions: !prevMode.promotions,
              }))
            }
          ></span>
        </div>
        <div>
          <h6 className="text-BrandGray900 font-ManropeBold">
            Promotions, recommendations & helpful resources
          </h6>
          <p className="text-[14px] font-ManropeRegular text-BrandGray600">
            Aliquam sagittis fames pharetra placerat tempus. Volutpat orci neque
            elit malesuada mauris neque, tempus.
          </p>
        </div>
      </div>

      {/* Daily summary emails */}
      <div className="mb-10 flex items-center gap-5">
        <div
          className={
            "w-[38px] h-[18px] rounded-lg p-[2px] bg-BrandGray300 flex justify-start cursor-pointer " +
            `${mode.dailySummary && "bg-BrandSecondary justify-end"}`
          }
        >
          <span
            className="w-[15px] h-full bg-white rounded-full"
            onClick={() =>
              setMode((prevMode) => ({
                ...prevMode,
                dailySummary: !prevMode.dailySummary,
              }))
            }
          ></span>
        </div>
        <div>
          <h6 className="text-BrandGray900 font-ManropeBold">
            Daily summary emails
          </h6>
          <p className="text-[14px] font-ManropeRegular text-BrandGray600">
            Aliquam sagittis fames pharetra placerat tempus. Volutpat orci neque
            elit malesuada mauris neque, tempus.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="text-[14px] font-ManropeRegular flex gap-5 mb-10">
        <button className="bg-BrandGray200 py-2 px-3 rounded">Cancel</button>
        <button className="bg-BrandPrimary py-2 px-3 rounded text-white">
          Change Password
        </button>
      </div>

      <hr className="mb-10" />
    </div>
  );
};

export default Notification;
