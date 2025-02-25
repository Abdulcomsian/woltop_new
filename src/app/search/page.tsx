"use client";
import { useState, useEffect } from "react";
import { Plus, Search, X } from "lucide-react";
import { useGetAllProductsQuery } from "~/store/api/allProductsApi";
import { useDispatch } from "react-redux";
import { addItemToCart } from "~/store/slices/cartSlice";
import { Card } from "~/components/ui/card";
import Link from "next/link";
import { toast } from "react-toastify";

const ITEMS_PER_PAGE = 8;

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

const SearchPage = () => {
  const { data: allProducts, isLoading } = useGetAllProductsQuery({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allProducts) {
      setFilteredProducts(allProducts);
    }
  }, [allProducts]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (allProducts) {
      const filtered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(query),
      );
      setFilteredProducts(filtered);
      setCurrentPage(1);
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddToCart = (product) => {
    dispatch(
      addItemToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        sale_price: product.sale_price || product.price,
        discount: product.discount || 0,
        featured_image: product.featured_image,
        variableId: 0,
        variableName: "Default",
      }),
    );
    toast.success(`${product.title} added to cart!`);
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="mt-[2px] bg-[#f7fcfc]">
        <div className="mx-auto flex max-w-[1075px] items-center gap-3 px-3 py-4">
          <Search className="text-gray-700" />
          <input
            type="text"
            className="w-full border-none bg-transparent p-2 focus:outline-none"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {searchQuery && (
            <X
              className="cursor-pointer text-gray-700"
              onClick={() => {
                setSearchQuery("");
                setFilteredProducts(allProducts);
              }}
            />
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto flex max-w-[1075px] flex-col gap-4 px-3 py-8 lg:flex-row">
        {/* Left: Product Cards */}
        <div className="w-full lg:w-3/5">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <div
                key={product?.id}
                className="relative mb-4 cursor-pointer border-b-[1px] border-l-4 border-l-transparent p-2 transition-all duration-300 ease-in-out hover:border-l-[#49AD91] hover:bg-[#f7fcfc]"
              >
                <Link
                  href={`/product/${product.id}`}
                  className="flex w-full items-start gap-4"
                >
                  <Card
                    style={{
                      backgroundImage: `url(${product.featured_image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="h-24 w-24 rounded-lg object-cover"
                  ></Card>
                  <div>
                    <p className="truncate text-[#505050]">{product.title}</p>
                    <p className="line-clamp-2 text-gray-500">
                      {product?.short_description}
                    </p>
                    <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                      ₹{product.sale_price || 0}
                    </span>
                    <del className="ml-1 text-xs text-gray-500">
                      ₹{product?.price}
                    </del>
                  </div>
                </Link>

                {/* Add to Cart Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(product);
                  }}
                  className="bg-[#49AD91]-500 hover:bg-[#49AD91]-700 absolute bottom-2 right-2 flex w-auto items-center justify-center gap-1 rounded bg-[#49AD91] px-3 py-1.5 text-xs font-medium text-white transition-colors duration-300 md:text-[18px]"
                >
                  <Plus className="h-3 w-3 md:h-5 md:w-5" />
                  ADD
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>

        {/* Right: Blog Section */}
        <div className="w-full border-l-[1px] pl-4 lg:w-2/5">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Latest in our BLOG
          </h2>
          <div className="mb-2 rounded-lg border bg-white p-6">
            <h1 className="font-semibold">The Fresh Ubtan Guide</h1>
            <p className="my-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, accusamus.
            </p>
            <Link href="/blogs" className="font-semibold text-[#49AD91]">
              Read More
            </Link>
          </div>
          <div className="rounded-lg border bg-white p-6">
            <h1 className="font-semibold">The Fresh Ubtan Guide</h1>
            <p className="my-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloremque, accusamus.
            </p>
            <Link href="/blogs" className="font-semibold text-[#49AD91]">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mx-auto my-4 flex max-w-[1075px] justify-start">
        {Array.from({
          length: Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 rounded px-3 py-1 ${
              currentPage === index + 1
                ? "bg-[#49AD91] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
