import { useState } from "react";
import { Eye, EyeOff } from "react-feather";

const Password = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Current Password */}
      <div className="py-2 mb-5">
        <label
          htmlFor="CurrentPassword"
          className="block font-ManropeSemiBold text-[14px]"
        >
          Current Password
        </label>
        <div className="flex justify-between items-center border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2 w-1/2">
          <input
            type={open ? "text" : "password"}
            id="CurrentPassword"
            className="outline-none w-[90%]"
          />
          <span>
            {open ? (
              <Eye
                onClick={() => setOpen(false)}
                size="22px"
                className="text-BrandGray500"
              />
            ) : (
              <EyeOff
                onClick={() => setOpen(true)}
                size="22px"
                className="text-BrandGray500"
              />
            )}
          </span>
        </div>
      </div>

      {/* New Password and Confirm Password */}
      <div className="flex justify-between items-center">
        <div className="py-2 w-[47%]">
          <label
            htmlFor="NewPassword"
            className="block font-ManropeSemiBold text-[14px]"
          >
            New Password
          </label>
          <div className="flex justify-between items-center border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2">
            <input
              type={open ? "text" : "password"}
              id="NewPassword"
              className="outline-none w-[90%]"
            />
            <span>
              {open ? (
                <Eye
                  onClick={() => setOpen(false)}
                  size="22px"
                  className="text-BrandGray500"
                />
              ) : (
                <EyeOff
                  onClick={() => setOpen(true)}
                  size="22px"
                  className="text-BrandGray500"
                />
              )}
            </span>
          </div>
        </div>

        <div className="py-2 w-[47%]">
          <label
            htmlFor="ComfirmPassword"
            className="block font-ManropeSemiBold text-[14px]"
          >
            Confirm Password
          </label>
          <div className="flex justify-between items-center border-[1px] rounded-md border-BrandGray400 text-BrandGray700 p-2">
            <input
              type={open ? "text" : "password"}
              id="ComfirmPassword"
              className="outline-none w-[90%]"
            />
            <span>
              {open ? (
                <Eye
                  onClick={() => setOpen(false)}
                  size="22px"
                  className="text-BrandGray500"
                />
              ) : (
                <EyeOff
                  onClick={() => setOpen(true)}
                  size="22px"
                  className="text-BrandGray500"
                />
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="text-[14px] font-ManropeRegular flex gap-5 my-5">
        <button className="bg-BrandGray200 py-2 px-3 rounded">Cancel</button>
        <button className="bg-BrandPrimary py-2 px-3 rounded text-white">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Password;
