import { useState } from "react";

const initialInventoryData = [
  { id: "P001", name: "T-Shirt", stock: 100, reorderThreshold: 20 },
  { id: "P002", name: "Jeans", stock: 10, reorderThreshold: 20 },
  { id: "P003", name: "Jacket", stock: 30, reorderThreshold: 15 },
  { id: "P004", name: "Sweater", stock: 5, reorderThreshold: 10 },
  { id: "P005", name: "Dress", stock: 0, reorderThreshold: 15 },
];

function InventoryPage() {
  const [inventoryData, setInventoryData] = useState(initialInventoryData);

  const handleRestock = (id) => {
    const newInventoryData = inventoryData.map((item) => {
      if (item.id === id) {
        return { ...item, stock: item.stock + 10 }; // Restock by 10
      }
      return item;
    });
    setInventoryData(newInventoryData);
  };

  const handleReorder = (id) => {
    // Implement reorder logic here (e.g., create a purchase order)
    alert(`Reorder initiated for product ID: ${id}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Inventory Management
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4 border-b">Product ID</th>
              <th className="py-3 px-4 border-b">Product Name</th>
              <th className="py-3 px-4 border-b">Stock Level</th>
              <th className="py-3 px-4 border-b">Reorder Threshold</th>
              <th className="py-3 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((product) => (
              <tr
                key={product.id}
                className={`text-sm hover:bg-gray-50 ${
                  product.stock <= product.reorderThreshold
                    ? "bg-yellow-100"
                    : ""
                }`}
              >
                <td className="border-b py-2 px-4">{product.id}</td>
                <td className="border-b py-2 px-4">{product.name}</td>
                <td className="border-b py-2 px-4">{product.stock}</td>
                <td className="border-b py-2 px-4">
                  {product.reorderThreshold}
                </td>
                <td className="border-b py-2 px-4">
                  <button
                    className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 mr-2"
                    onClick={() => handleRestock(product.id)}
                  >
                    Restock
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={() => handleReorder(product.id)}
                  >
                    Reorder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InventoryPage;
