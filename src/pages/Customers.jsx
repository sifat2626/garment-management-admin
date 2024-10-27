import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCalendar,
} from "react-icons/hi";

const customersData = [
  {
    id: "C001",
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "123-456-7890",
    registration_date: "2024-01-15",
    orders_count: 5,
  },
  {
    id: "C002",
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "234-567-8901",
    registration_date: "2024-02-20",
    orders_count: 3,
  },
  {
    id: "C003",
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "345-678-9012",
    registration_date: "2024-03-12",
    orders_count: 7,
  },
  {
    id: "C004",
    name: "Diana Prince",
    email: "diana@example.com",
    phone: "456-789-0123",
    registration_date: "2024-04-25",
    orders_count: 1,
  },
  {
    id: "C005",
    name: "Edward Elric",
    email: "edward@example.com",
    phone: "567-890-1234",
    registration_date: "2024-05-05",
    orders_count: 4,
  },
  // Add more customers as needed
];

function Customers() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex-1">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Customers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 border-b">Customer ID</th>
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">
                <HiOutlineMail className="inline mr-1" /> Email
              </th>
              <th className="py-3 px-4 border-b">
                <HiOutlinePhone className="inline mr-1" /> Phone
              </th>
              <th className="py-3 px-4 border-b">
                <HiOutlineCalendar className="inline mr-1" /> Registration Date
              </th>
              <th className="py-3 px-4 border-b">Orders Count</th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((customer, index) => (
              <tr
                key={customer.id}
                className={`text-sm ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-100 transition-colors`}
              >
                <td className="border-b py-2 px-4 text-gray-700">
                  {customer.id}
                </td>
                <td className="border-b py-2 px-4 text-gray-700">
                  {customer.name}
                </td>
                <td className="border-b py-2 px-4 text-gray-700">
                  <span className=" text-green-800 py-1 px-2 rounded">
                    {customer.email}
                  </span>
                </td>
                <td className="border-b py-2 px-4 text-gray-700">
                  <span className=" text-yellow-800 py-1 px-2 rounded">
                    {customer.phone}
                  </span>
                </td>
                <td className="border-b py-2 px-4 text-gray-700">
                  <span className="  py-1 px-2 rounded">
                    {customer.registration_date}
                  </span>
                </td>
                <td className="border-b py-2 px-4 text-gray-700">
                  <span
                    className={`py-1 px-2 rounded ${
                      customer.orders_count > 3 ? "bg-green-200" : "bg-red-200"
                    }`}
                  >
                    {customer.orders_count}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customers;
