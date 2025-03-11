"use client";
import { useState, useEffect } from "react";
import { Minus, Plus, Search, X } from "lucide-react";
import { useGetAllProductsQuery } from "~/store/api/allProductsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
} from "~/store/slices/cartSlice";
import { Card } from "~/components/ui/card";
import Link from "next/link";
import { toast } from "react-toastify";
import { Drawer } from "antd";
import { useGetBlogsQuery } from "~/store/api/blogsApi";
import utils from "~/utils";

const ITEMS_PER_PAGE = 8;

const Spinner = () => (
  <div className="flex items-center justify-center">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#49AD91] border-t-transparent"></div>
  </div>
);

const SearchPage = () => {
  const { data: allProducts, isLoading } = useGetAllProductsQuery({});
  const { data: blogs, isLoading: laodingBlogs } = useGetBlogsQuery({});

  const cartData = useSelector((state: any) => state.cart);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const [loadingItem, setLoadingItem] = useState<{
    itemId: number;
    action: "delete" | "increment" | "decrement";
  } | null>(null);

  const [itemsToShow, setItemsToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsToShow(window.innerWidth >= 768 ? 3 : 2);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const lastItemPrice =
    cartData?.items?.[cartData.items.length - 1]?.sale_price || 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const handleAddToCart = async (product) => {
    dispatch(
      addItemToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        sale_price: product.sale_price || product.price,
        discount: product.discount || 0,
        featured_image: product.featured_image,
        variableId: null,
        variableName: "Default",
      }),
    );
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("product_id", product.id.toString());

      const response = await fetch(`${utils.BASE_URL}/store-cart`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
    setIsDrawerOpen(true);
  };

  const handleIncrement = (itemId: number) => {
    const item = cartData.items.find((item: any) => item.id === itemId);
    if (item) {
      setLoadingItem({ itemId, action: "increment" });
      setTimeout(() => {
        dispatch(
          updateItemQuantity({
            id: itemId,
            variableId: null,
            quantity: item.quantity + 1,
          }),
        );
        setLoadingItem(null);
      }, 1000);
    }
  };

  const handleDecrement = (itemId: number) => {
    const item = cartData.items.find((item: any) => item.id === itemId);
    if (item) {
      if (item.quantity === 1) {
        setLoadingItem({ itemId, action: "delete" });

        setTimeout(async () => {
          try {
            const token = localStorage.getItem("token");
            const response = await fetch(
              `${utils.BASE_URL}/delete-cart-item/${itemId}`,
              {
                method: "GET",
                headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
                },
              },
            );

            if (response.ok) {
              dispatch(removeItemFromCart({ id: itemId, variableId: null }));
            } else {
              const data = await response.json();
              console.error("Failed to delete item:", data);
            }
          } catch (error) {
            console.error("Error removing item:", error);
          } finally {
            setLoadingItem(null);
          }
        }, 1000);
      } else {
        setLoadingItem({ itemId, action: "decrement" });

        setTimeout(() => {
          dispatch(
            updateItemQuantity({
              id: itemId,
              variableId: null,
              quantity: item.quantity - 1,
            }),
          );
          setLoadingItem(null);
        }, 1000);
      }
    }
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );
  const LimitedBlogs = blogs?.data?.slice(0, 3);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
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
                    {product?.range ? (
                      <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                        ₹{product.range?.sale_price || 0}
                      </span>
                    ) : (
                      <>
                        <span className="text-heading text-sm font-semibold text-[#121212] md:text-base">
                          ₹{product.sale_price || 0}
                        </span>
                        <del className="ml-1 text-xs text-gray-500">
                          ₹{product?.price}
                        </del>
                      </>
                    )}
                  </div>
                </Link>

                {product?.variables.length < 1 && (
                  <>
                    {cartData.items.some((item) => {
                      if (item.id === product.id) {
                        return item.id === product.id;
                      }
                    }) ? (
                      <div className="absolute bottom-2 right-2 z-40 flex h-[34px] rounded border border-[#49AD91]">
                        <button
                          className="hover:bg-accent-hover flex cursor-pointer items-center justify-center rounded-l bg-white px-[8px] py-[11px] text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                          onClick={() => handleDecrement(product.id)}
                        >
                          <span className="sr-only">minus</span>
                          <Minus />
                        </button>
                        <div className="flex items-center justify-center bg-[#49AD91] px-[20px] py-[11px] text-sm font-semibold text-[#fff]">
                          {loadingItem?.itemId === product?.id &&
                          (loadingItem?.action === "increment" ||
                            loadingItem?.action === "delete" ||
                            loadingItem?.action === "decrement") ? (
                            <div
                              className="spinner-border inline-block h-4 w-4 animate-spin rounded-full border-2"
                              role="status"
                            ></div>
                          ) : (
                            <div>
                              {cartData.items.find(
                                (item) => item.id === product.id,
                              )?.quantity || 0}
                            </div>
                          )}
                        </div>
                        <button
                          className="hover:bg-accent-hover flex cursor-pointer items-center justify-center rounded-r bg-white px-[8px] py-[11px] text-[#49AD91] transition-colors duration-200 hover:!bg-gray-100 focus:outline-0"
                          onClick={() => handleIncrement(product.id)}
                        >
                          <span className="sr-only">plus</span>
                          <Plus />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(product);
                        }}
                        className="bg-[#49AD91]-500 hover:bg-[#49AD91]-700 absolute bottom-2 right-2 flex w-auto items-center justify-center gap-1 rounded bg-[#49AD91] px-3 py-1.5 text-xs font-medium text-white transition-colors duration-300 md:px-6 md:text-[18px]"
                      >
                        <Plus className="h-3 w-3 md:h-5 md:w-5" />
                        ADD
                      </button>
                    )}
                  </>
                )}
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
          {LimitedBlogs?.map((blog) => (
            <div key={blog?.id} className="mb-2 rounded-lg border bg-white p-6">
              <h1 className="font-semibold">{blog?.title}</h1>
              <p className="my-2 line-clamp-2 text-gray-600">
                {blog?.short_description}
              </p>
              <Link href="/blogs" className="font-semibold text-[#49AD91]">
                Read More
              </Link>
            </div>
          ))}
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

      <Drawer
        placement="bottom"
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        height={100}
        styles={{
          header: { display: "none" },
        }}
      >
        <div className="mx-auto flex w-fit items-center justify-center gap-[10px] md:gap-10">
          <div className="flex items-center justify-center gap-[10px]">
            {cartData?.items?.slice(0, itemsToShow).map((item, index) => (
              <div
                key={item.id || `item-${index}`}
                className="border-border-200 flex w-full gap-3 border-opacity-75 text-sm md:gap-[18px]"
              >
                <Link
                  href={`/product/${item?.id}`}
                  className="relative flex h-[48px] w-[30px] shrink-0 items-center justify-center overflow-hidden rounded bg-gray-100"
                >
                  <img
                    alt={item.name}
                    className="h-full w-full object-cover"
                    src={
                      item?.featured_image || "https://placehold.co/600x400.png"
                    }
                  />
                </Link>
              </div>
            ))}
            {cartData?.items?.length > itemsToShow && (
              <span
                className="flex min-w-12 text-xs font-semibold"
                style={{
                  visibility:
                    cartData?.items?.length > itemsToShow
                      ? "visible"
                      : "hidden",
                  opacity: cartData?.items?.length > itemsToShow ? 1 : 0,
                }}
              >
                +{cartData.items.length - itemsToShow} items
              </span>
            )}
          </div>
          <Link
            href="/cart"
            onClick={() => setIsDrawerOpen(false)}
            className="flex h-[40px] min-w-[175px] items-center justify-center rounded bg-[#49AD91] px-4 py-2 text-sm font-bold uppercase text-white shadow-md"
          >
            ₹ {lastItemPrice} • Go to Cart
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default SearchPage;
