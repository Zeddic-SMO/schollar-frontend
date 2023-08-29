import TopBanner from "../../Elements/TopBanner";

const Reviews = () => {
  return (
    <>
      <TopBanner />
      {/* Header */}
      <div className="flex justify-between items-center pb-10">
        <h1 className="font-ManropeBold text-[32px] text-BrandGray900">
          Reviews
        </h1>
        <div className="flex gap-3 text-red-500 border border-red-200 items-center rounded-md px-2 py-1 cursor-pointer hover:bg-red-400 hover:text-white"></div>
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
                Review_ID
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Consultant
              </th>
              <th
                scope="col"
                colSpan={2}
                className="px-4 py-1 border-r-2 border-white"
              >
                Comment
              </th>
              <th scope="col" className="px-4 py-1 border-r-2 border-white">
                Rating
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
              <td colSpan={8} className="py-5 text-center font-ManropeRegular">
                You have no reviews
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

export default Reviews;
