import { Link } from "react-router-dom";

const popularProductData = [
  {
    id: "1",
    product_name: "Wireless Headphones",
    product_thumbnail: "https://source.unsplash.com/100x100/?headphones",
    product_price: "89.99",
    product_stock: 341,
  },
  {
    id: "2",
    product_name: "Smartphone",
    product_thumbnail: "https://source.unsplash.com/100x100/?smartphone",
    product_price: "699.99",
    product_stock: 18,
  },
  {
    id: "3",
    product_name: "Gaming Mouse",
    product_thumbnail: "https://source.unsplash.com/100x100/?gaming-mouse",
    product_price: "49.99",
    product_stock: 115,
  },
  {
    id: "4",
    product_name: "Laptop Stand",
    product_thumbnail: "https://source.unsplash.com/100x100/?laptop-stand",
    product_price: "29.99",
    product_stock: 0,
  },
  {
    id: "5",
    product_name: "Bluetooth Speaker",
    product_thumbnail: "https://source.unsplash.com/100x100/?bluetooth-speaker",
    product_price: "59.99",
    product_stock: 29,
  },
];

function PopularProducts() {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 w-72">
      <strong>Popular Products</strong>
      <div className="mt-4 flex flex-col gap-3 ">
        {popularProductData.map((product) => (
          <Link to="#" className="flex hover:no-underline" key={product.id}>
            <div className="size-10 min-w-10 bg-gray-200 rounded-sm overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={product.product_thumbnail}
                alt={product.product_name}
              />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-sm text-gray-800 ">{product.product_name}</p>
              <span
                className={`text-sm font-medium ${
                  product.product_stock === 0
                    ? "text-orange-500"
                    : "text-green-700"
                }`}
              >
                {product.product_stock === 0
                  ? "Out of stock"
                  : product.product_stock + " in stock"}
              </span>
            </div>
            <div className="text-xs text-gray-400 pl-2 my-auto">
              ${product.product_price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularProducts;
