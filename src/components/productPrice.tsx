import React from "react";

export default function productPrice({ responseData }) {
  return (
    <div className="mt-4 flex items-center justify-start gap-2">
      {responseData?.data?.variables?.map((variable) => (
        <div
          key={variable.id}
          className={`product-price-wrapper relative w-full rounded-lg border-dashed p-4 ${
            variable.discount > 50 ? "bg-[#49AD911A]" : ""
          }`}
        >
          {/* Discount Badge */}
          <div className="inline-block rounded-full bg-[#49AD911A] pl-3 pr-3">
            <span className="text-[#49AD91]">{variable.discount}% off</span>
          </div>

          {/* Product Dimensions */}
          <div className="dimension mt-1">{variable.name}</div>

          {/* Pricing Details */}
          <div className="price-wrapper flex">
            <div className="real-price text-[#49AD91]">
              ₹{variable.sale_price}
            </div>
            <div className="descount-price text-[12px] text-[#BAB8B8] line-through">
              ₹{variable.price}
            </div>
          </div>

          {/* Price Per Unit */}
          <div className="product-size">
            ₹{(variable.sale_price / 6).toFixed(2)}/ft²
          </div>

          {/* Checkbox for High Discounts */}
          {variable.discount > 50 && (
            <div className="absolute right-3 top-5">
              <input type="checkbox" id={`checkbox-${variable.id}`} />
              <label htmlFor={`checkbox-${variable.id}`}></label>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
