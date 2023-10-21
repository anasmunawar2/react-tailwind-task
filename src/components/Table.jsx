import { TableDetail } from "../constants";

const Table = () => {
  return (
    <div className="rounded-3xl shadow-xl p-4 mt-20 mb-20">
      <h2 className="text-4xl font-semibold text-dark-gray mb-4">
        Recent Appointments
      </h2>
      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full">
          <thead className="bg-gray-background">
            <tr>
              <th className="p-2 text-base flex justify-start font-normal text-gray-text">
                Service
              </th>
              <th className="p-2 text-base font-normal text-gray-text">
                Employee
              </th>
              <th className="p-2 text-base font-normal text-gray-text">Sale</th>
              <th className="p-2 text-base font-normal text-gray-text">
                Earnings
              </th>
            </tr>
          </thead>
          <tbody>
            {TableDetail.map((item, id) => (
              <tr className="border-b border-light-gray pb-4" key={id}>
                <td className="p-2">
                  <div className="flex flex-col items-center md:flex-row">
                    <img
                      src={item.src}
                      alt="Product Image"
                      className="w-[65.56px] h-[65.56px] object-cover md:w-20 md:h-20 md:mr-4"
                    />
                    <div className="mt-2 md:mt-0">
                      <h2 className="text-base font-medium text-text-color">
                        {item.title}
                      </h2>
                      <p className="text-sm font-normal text-gray-text">
                        {item.date}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-2 text-base font-normal text-dark-gray text-center">
                  {item.name}
                </td>
                <td className="p-2 text-base font-normal text-dark-gray text-center">
                  {item.sale}
                </td>
                <td className="p-2 text-center">
                  <button className="bg-blue-background text-center w-[69.494px] h-[31.469px] rounded-md text-light-blue text-base font-medium">
                    {item.price}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
