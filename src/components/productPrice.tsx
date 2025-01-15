import React, { useState } from "react";

interface Variable {
  id: number;
  discount: number;
  name: string;
  sale_price: number;
  price: number;
}

interface ResponseData {
  data: {
    variables: Variable[];
  };
}

export default function ProductPrice({
  responseData,
}: {
  responseData: ResponseData;
}) {
  const { variables } = responseData?.data;
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="mt-4 flex items-center justify-start gap-2">
      {variables?.map((variable) => (
        <div
          key={variable.id}
          onClick={() => handleCardClick(variable.id)}
          className={`product-price-wrapper relative w-full cursor-pointer rounded-lg border-dashed p-4 ${
            selectedId === variable.id ? "bg-[#49AD911A]" : ""
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
          {selectedId === variable.id && (
            <div className="absolute right-3 top-5">
              <input type="checkbox" id={`checkbox-${variable.id}`} checked />
              <label htmlFor={`checkbox-${variable.id}`}></label>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
