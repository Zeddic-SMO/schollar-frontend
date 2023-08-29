import { useState } from "react";
import TopBanner from "../../Elements/TopBanner";
import { Plus } from "react-feather";

const Appointments = () => {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <>
      <TopBanner />

      {/* Heading */}
      <div className="flex justify-between items-center pb-10">
        <h1 className="font-ManropeBold text-[32px] text-BrandGray900">
          Appointments
        </h1>
        <div className="bg-BrandPrimary flex gap-3 text-white items-center rounded-md px-2 py-1">
          <span>
            <Plus size={16} />
          </span>
          <span className="font-ManropeRegular text-[16px] py-1">
            New Appointment
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="text-[18px] font-ManropeBold flex gap-12 border-b-2 border-BrandGray300 mb-5">
        <span
          className={`cursor-pointer py-5 ${
            activeTab == "All"
              ? ` text-BrandPrimary `
              : `text-BrandGray600 hover:text-BrandPrimary`
          }`}
          onClick={() => setActiveTab("All")}
        >
          All
        </span>
        <span
          className={`cursor-pointer py-5 ${
            activeTab == "Today"
              ? ` text-BrandPrimary`
              : `text-BrandGray600 hover:text-BrandPrimary `
          }`}
          onClick={() => setActiveTab("Today")}
        >
          Today
        </span>
        <span
          className={`cursor-pointer py-5 
                ${
                  activeTab == "Upcoming"
                    ? ` text-BrandPrimary `
                    : `text-BrandGray600 hover:text-BrandPrimary `
                }`}
          onClick={() => setActiveTab("Upcoming")}
        >
          Upcoming
        </span>
        <span
          className={`cursor-pointer py-5 
                ${
                  activeTab == "Completed"
                    ? ` text-BrandPrimary `
                    : `text-BrandGray600 hover:text-BrandPrimary `
                }`}
          onClick={() => setActiveTab("Completed")}
        >
          Completed
        </span>
      </div>

      {/* Table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 font-ManropeRegular">
          <thead className="text-xs text-gray-700 bg-gray-50">
            <tr className="bg-[#6366F114]">
              <th scope="col" className="px-4 py-3">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Meeting_ID
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Consultant
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Application
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Program
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Country
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Date
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Time
              </th>
              <th scope="col" className="px-4 py-1">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={9} className="py-5 text-center font-ManropeRegular">
                No Records
              </td>
            </tr>
            {/* <tr className="bg-white border-b  hover:bg-gray-50 dark:hover:bg-BrandGray200">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
              </td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
              <td className="px-6 py-4"></td>
            </tr> */}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <nav
        className="flex items-center justify-between pt-4"
        aria-label="Table navigation"
      >
        <ul className="inline-flex -space-x-px text-sm h-8">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Appointments;
