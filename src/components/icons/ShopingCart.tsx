interface ShopingCartProps {
  activeTab: string;
}

export const ShopingCart: React.FC<ShopingCartProps & React.SVGAttributes<{}>> = ({ activeTab, ...props }) => {
  const strokeColor = activeTab === "cart" ? "black" : "#7A7474";
  
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M9 22.5C9.55228 22.5 10 22.0523 10 21.5C10 20.9477 9.55228 20.5 9 20.5C8.44772 20.5 8 20.9477 8 21.5C8 22.0523 8.44772 22.5 9 22.5Z"
        stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      ></path>
      <path
        d="M20 22.5C20.5523 22.5 21 22.0523 21 21.5C21 20.9477 20.5523 20.5 20 20.5C19.4477 20.5 19 20.9477 19 21.5C19 22.0523 19.4477 22.5 20 22.5Z"
        stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      ></path>
      <path
        d="M1 1.5H5L7.68 14.89C7.77144 15.3504 8.02191 15.764 8.38755 16.0583C8.75318 16.3526 9.2107 16.509 9.68 16.5H19.4C19.8693 16.509 20.3268 16.3526 20.6925 16.0583C21.0581 15.764 21.3086 15.3504 21.4 14.89L23 6.5H6"
        stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      ></path>
    </svg>
  );
};
