const recentOrderData = [
  {
    id: "1",
    product_id: "P001",
    customer_id: "C001",
    customer_name: "Alice Johnson",
    order_date: "2024-10-01",
    order_total: "150.00",
    current_order_status: "Shipped",
    shipment_address: "123 Maple St, Springfield, IL",
  },
  {
    id: "2",
    product_id: "P002",
    customer_id: "C002",
    customer_name: "Bob Smith",
    order_date: "2024-10-02",
    order_total: "200.50",
    current_order_status: "Pending",
    shipment_address: "456 Oak St, Springfield, IL",
  },
  {
    id: "3",
    product_id: "P003",
    customer_id: "C003",
    customer_name: "Charlie Brown",
    order_date: "2024-10-03",
    order_total: "99.99",
    current_order_status: "Delivered",
    shipment_address: "789 Pine St, Springfield, IL",
  },
  {
    id: "4",
    product_id: "P004",
    customer_id: "C004",
    customer_name: "Diana Prince",
    order_date: "2024-10-04",
    order_total: "250.00",
    current_order_status: "Cancelled",
    shipment_address: "101 Birch St, Springfield, IL",
  },
  {
    id: "5",
    product_id: "P005",
    customer_id: "C005",
    customer_name: "Edward Elric",
    order_date: "2024-10-05",
    order_total: "175.75",
    current_order_status: "Processing",
    shipment_address: "202 Cedar St, Springfield, IL",
  },
  {
    id: "6",
    product_id: "P006",
    customer_id: "C006",
    customer_name: "Fiona Apple",
    order_date: "2024-10-06",
    order_total: "120.00",
    current_order_status: "Shipped",
    shipment_address: "303 Elm St, Springfield, IL",
  },
  {
    id: "7",
    product_id: "P007",
    customer_id: "C007",
    customer_name: "George Clooney",
    order_date: "2024-10-07",
    order_total: "95.50",
    current_order_status: "Pending",
    shipment_address: "404 Maple St, Springfield, IL",
  },
  {
    id: "8",
    product_id: "P008",
    customer_id: "C008",
    customer_name: "Hannah Montana",
    order_date: "2024-10-08",
    order_total: "300.00",
    current_order_status: "Delivered",
    shipment_address: "505 Oak St, Springfield, IL",
  },
  {
    id: "9",
    product_id: "P009",
    customer_id: "C009",
    customer_name: "Igor Stravinsky",
    order_date: "2024-10-09",
    order_total: "450.00",
    current_order_status: "Shipped",
    shipment_address: "606 Pine St, Springfield, IL",
  },
  // {
  //   id: "10",
  //   product_id: "P010",
  //   customer_id: "C010",
  //   customer_name: "Jenna Ortega",
  //   order_date: "2024-10-10",
  //   order_total: "80.00",
  //   current_order_status: "Processing",
  //   shipment_address: "707 Birch St, Springfield, IL",
  // },
];

function getOrderStatusClass(status) {
  switch (status) {
    case "Shipped":
      return "bg-green-100 text-green-800";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Delivered":
      return "bg-blue-100 text-blue-800";
    case "Cancelled":
      return "bg-red-100 text-red-800";
    case "Processing":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

function RecentOrders() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Recent Orders</strong>
      <div className="mt-3">
        <table className="w-full border-collapse text-gray-700">
          <thead>
            <tr>
              <th className="border-b border-gray-300 text-left pb-2">ID</th>
              <th className="border-b border-gray-300 text-left pb-2">
                Product ID
              </th>
              <th className="border-b border-gray-300 text-left pb-2">
                Customer Name
              </th>
              <th className="border-b border-gray-300 text-left pb-2">
                Order Date
              </th>
              <th className="border-b border-gray-300 text-left pb-2">
                Order Total
              </th>
              <th className="border-b border-gray-300 text-left pb-2">
                Shipping Address
              </th>
              <th className="border-b border-gray-300 text-left pb-2">
                Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            {recentOrderData.map((order) => (
              <tr key={order.id} className="text-sm">
                <td className="border-b border-gray-200 py-2">#{order.id}</td>
                <td className="border-b border-gray-200 py-2">
                  {order.product_id}
                </td>
                <td className="border-b border-gray-200 py-2">
                  {order.customer_name}
                </td>
                <td className="border-b border-gray-200 py-2">
                  {order.order_date}
                </td>
                <td className="border-b border-gray-200 py-2">
                  {order.order_total}
                </td>
                <td className="border-b border-gray-200 py-2">
                  {order.shipment_address}
                </td>
                <td className={`border-b border-gray-200 py-2 `}>
                  <p
                    className={`py-2 px-2 rounded-sm ${getOrderStatusClass(
                      order.current_order_status
                    )}`}
                  >
                    {order.current_order_status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentOrders;
