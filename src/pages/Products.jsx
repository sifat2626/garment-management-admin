// Sample garment product data
const productsData = [
  {
    id: "P001",
    name: "T-Shirt",
    price: 29.99,
    image: "https://i.ibb.co/phSTx5q/tshirt-1.jpg", // Garment Image
    description: "Comfortable cotton t-shirt.",
  },
  {
    id: "P002",
    name: "Jeans",
    price: 49.99,
    image: "https://i.ibb.co/SmFLhr2/jeans-1.jpg", // Garment Image
    description: "Stylish denim jeans.",
  },
  {
    id: "P003",
    name: "Jacket",
    price: 89.99,
    image: "https://i.ibb.co/Wv1b20T/jacket-1.jpg", // Garment Image
    description: "Warm winter jacket.",
  },
  {
    id: "P004",
    name: "Sweater",
    price: 39.99,
    image: "https://i.ibb.co/2vmRRsk/sweater-1.jpg", // Garment Image
    description: "Cozy knit sweater.",
  },
  {
    id: "P005",
    name: "Dress",
    price: 59.99,
    image: "https://i.ibb.co/02GkFct/dress-1.jpg", // Garment Image
    description: "Elegant summer dress.",
  },
];

function Products() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-xl font-bold text-gray-800 mt-2">
                ${product.price.toFixed(2)}
              </p>

              <div className="mt-4">
                <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                  Edit Product
                </button>
                <button className="mt-2 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors">
                  Delete Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
