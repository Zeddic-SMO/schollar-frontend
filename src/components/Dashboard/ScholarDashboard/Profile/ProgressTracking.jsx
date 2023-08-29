const ProgressTracking = () => {
  return (
    <div>
      <div className="bg-BrandGray100 rounded-md p-5">
        <h5 className="text-BrandGray900 font-ManropeBold py-1">
          Progress Tracker
        </h5>
        <p className="py-2 font-ManropeRegular text-BrandGray600 text-[14px]">
          You can start tracking by selecting the appropriate check boxes below.
        </p>
        <p className="flex justify-between items-center py-2">
          <span className="font-ManropeRegular">Progress</span>
          <span className="font-ManropeBold">25%</span>
        </p>
        <div className="w-full bg-gray-200 rounded-full ">
          <div
            style={{ width: "25%" }}
            className="bg-BrandSecondary text-xs font-medium text-blue-100 text-center leading-none rounded-full h-[4px]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
