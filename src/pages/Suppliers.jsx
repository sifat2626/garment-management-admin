import { useState } from "react";

const initialSuppliers = [
  {
    id: "S001",
    name: "ABC Garments",
    contact: "John Doe",
    email: "contact@abcgarments.com",
    phone: "0123456789",
  },
  {
    id: "S002",
    name: "XYZ Fashion",
    contact: "Jane Smith",
    email: "info@xyzfashion.com",
    phone: "0987654321",
  },
];

function SuppliersPage() {
  const [suppliers, setSuppliers] = useState(initialSuppliers);
  const [newSupplier, setNewSupplier] = useState({
    name: "",
    contact: "",
    email: "",
    phone: "",
  });

  const handleAddSupplier = () => {
    const newId = `S00${suppliers.length + 1}`;
    setSuppliers([...suppliers, { id: newId, ...newSupplier }]);
    setNewSupplier({ name: "", contact: "", email: "", phone: "" }); // Reset form
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Suppliers</h2>

      {/* Add Supplier Form */}
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">
          Add New Supplier
        </h3>
        <div className="grid grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-2 rounded"
            value={newSupplier.name}
            onChange={(e) =>
              setNewSupplier({ ...newSupplier, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Contact Person"
            className="border border-gray-300 p-2 rounded"
            value={newSupplier.contact}
            onChange={(e) =>
              setNewSupplier({ ...newSupplier, contact: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 rounded"
            value={newSupplier.email}
            onChange={(e) =>
              setNewSupplier({ ...newSupplier, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone"
            className="border border-gray-300 p-2 rounded"
            value={newSupplier.phone}
            onChange={(e) =>
              setNewSupplier({ ...newSupplier, phone: e.target.value })
            }
          />
        </div>
        <button
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
          onClick={handleAddSupplier}
        >
          Add Supplier
        </button>
      </div>

      {/* Suppliers Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-4 border-b text-left">Supplier ID</th>
              <th className="py-3 px-4 border-b text-left">Name</th>
              <th className="py-3 px-4 border-b text-left">Contact Person</th>
              <th className="py-3 px-4 border-b text-left">Email</th>
              <th className="py-3 px-4 border-b text-left">Phone</th>
              <th className="py-3 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="text-sm hover:bg-gray-100">
                <td className="border-b py-2 px-4 text-center">
                  {supplier.id}
                </td>
                <td className="border-b py-2 px-4">{supplier.name}</td>
                <td className="border-b py-2 px-4">{supplier.contact}</td>
                <td className="border-b py-2 px-4">{supplier.email}</td>
                <td className="border-b py-2 px-4">{supplier.phone}</td>
                <td className="border-b py-2 px-4 text-center">
                  <button className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-200 mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200">
                    Delete
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

export default SuppliersPage;
