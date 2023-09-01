import { Plus } from "react-feather";
import TopBanner from "../../Elements/TopBanner";

const BankAccounts = () => {
  return (
    <>
      <TopBanner />
      {/* Header */}
      <div className="flex justify-between items-center pb-10">
        <h1 className="font-ManropeBold text-[32px] text-BrandGray900">
          Bank Accounts
        </h1>
        <div className="bg-BrandPrimary flex gap-3 text-white items-center rounded-md px-2 py-1">
          <span>
            <Plus size={16} />
          </span>
          <span className="font-ManropeRegular text-[16px] py-1">
            New Account
          </span>
        </div>
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
                Account_ID
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Bank_Name
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Account_Name
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Account_Number
              </th>

              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Date
              </th>

              <th scope="col" className="px-4 py-1">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="py-5 text-center font-ManropeRegular">
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
    </>
  );
};

export default BankAccounts;
