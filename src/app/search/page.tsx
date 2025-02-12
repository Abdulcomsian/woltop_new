"use client";
import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import { useGetAllProductsQuery } from "~/store/api/allProductsApi";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import Link from "next/link";

const SearchPage = () => {
  const { data: allProducts, isLoading } = useGetAllProductsQuery({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Initialize filteredProducts with allProducts when data is fetched
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
    }
  };

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  return (
    <>
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
      <div className="mx-auto max-w-[1075px] px-3 py-8">
        {/* Product List */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product?.id}
                href={`/product/${product.id}`}
                className="card-wrapper relative cursor-pointer"
              >
                <div className="absolute right-0 top-0 z-40 -translate-y-1/2 translate-x-1/2">
                  <div className="flex w-11/12 justify-end">
                    <button className="text-heading hover:text-light focus:text-light flex h-7 w-7 items-center justify-center rounded border border-blue-200 bg-[#F5FFFC] text-sm transition-colors hover:border-accent hover:bg-accent focus:border-accent focus:bg-accent focus:outline-0 md:h-9 md:w-9">
                      <svg
                        fill="#49AD91"
                        viewBox="0 0 24 24"
                        stroke="#49AD91"
                        className="h-5 w-5 stroke-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <Card
                  style={{
                    backgroundImage: `url(${product.featured_image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="custom-card-class relative z-0 h-52 w-auto items-center justify-center md:h-80"
                >
                  {/* <div className="text-light absolute left-2 top-2 rounded bg-accent bg-emerald-600 px-1.5 text-xs font-semibold leading-6 text-white sm:px-2 md:top-2 md:px-2.5 ltr:left-3 ltr:md:left-4 rtl:right-2 rtl:md:right-2">
                  {card.discount}
                </div> */}
                </Card>
                <CardContent>
                  <p className="truncate text-[#505050]">{product.title}</p>
                </CardContent>
                <CardFooter>
                  <CardDescription>
                    <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                      ₹{product.price || 0}
                    </span>
                    {/* <del className="text-body ml-2 text-xs md:text-sm ltr:ml-2 rtl:mr-2">
                    {card.discountPrice}
                  </del> */}
                  </CardDescription>
                </CardFooter>
              </Link>
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
