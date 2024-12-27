
import mainLogo from'../../../assets/img/logo.webp';
import React, { useState } from 'react'; 

export default function navbar() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

    return (
      <div>
  
   
    {/* <!-- navbar goes here --> */}
<nav className="bg-gray-100">
  <div className="max-w-7xl mx-auto ">
    <div className="flex justify-between px-5">

      <div className="flex space-x-4">
        {/* <!-- logo --> */}
        <div>
          <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
              {/* <img className='w-100' src={mainLogo} alt="" />
            <span className="font-bold">Wolpin</span> */}

          </a>
        </div>

        {/* <!-- primary nav --> */}
        <div className="hidden md:flex items-center space-x-1"  >
          <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">New Arrival</a>
          <a href="/about" className="py-5 px-3 text-gray-700 hover:text-gray-900">About</a>
          <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Tools</a>
          <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Careers</a>
          <a href="#" className="py-5 px-3 text-gray-700 hover:text-gray-900">Contact</a>
        </div>

      </div>

      {/* <!-- secondary nav --> */}
      <div className="hidden md:flex items-center space-x-1">
       <div className="flex shrink-0 items-center space-x-4 rtl:space-x-reverse sm:space-x-6">
      
       <div className="hidden lg:inline-flex">
        </div>
        <svg viewBox="0 0 17.048 18"  className="h-5 w-5">
            <path d="M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z" transform="translate(-367.297 -371.285)" fill="currentColor"></path></svg><svg viewBox="0 -28 512.001 512" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#000000" stroke-width="2"
            className="h-5 w-5">
            <path d="M256 455.516c-7.29 0-14.316-2.641-19.793-7.438-20.684-18.086-40.625-35.082-58.219-50.074l-.09-.078c-51.582-43.957-96.125-81.918-127.117-119.313C16.137 236.81 0 197.172 0 153.871c0-42.07 14.426-80.883 40.617-109.293C67.121 15.832 103.488 0 143.031 0c29.555 0 56.621 9.344 80.446 27.77C235.5 37.07 246.398 48.453 256 61.73c9.605-13.277 20.5-24.66 32.527-33.96C312.352 9.344 339.418 0 368.973 0c39.539 0 75.91 15.832 102.414 44.578C497.578 72.988 512 111.801 512 153.871c0 43.3-16.133 82.938-50.777 124.738-30.993 37.399-75.532 75.356-127.106 119.309-17.625 15.016-37.597 32.039-58.328 50.168a30.046 30.046 0 0 1-19.789 7.43zM143.031 29.992c-31.066 0-59.605 12.399-80.367 34.914-21.07 22.856-32.676 54.45-32.676 88.965 0 36.418 13.535 68.988 43.883 105.606 29.332 35.394 72.961 72.574 123.477 115.625l.093.078c17.66 15.05 37.68 32.113 58.516 50.332 20.961-18.254 41.012-35.344 58.707-50.418 50.512-43.051 94.137-80.223 123.469-115.617 30.344-36.618 43.879-69.188 43.879-105.606 0-34.516-11.606-66.11-32.676-88.965-20.758-22.515-49.3-34.914-80.363-34.914-22.758 0-43.653 7.235-62.102 21.5-16.441 12.719-27.894 28.797-34.61 40.047-3.452 5.785-9.53 9.238-16.261 9.238s-12.809-3.453-16.262-9.238c-6.71-11.25-18.164-27.328-34.61-40.047-18.448-14.265-39.343-21.5-62.097-21.5zm0 0"></path></svg>
            <div className="flex items-center lg:space-x-4 rtl:lg:space-x-reverse space-x-4 sm:space-x-6">
            <button className="product-cart lg:flex relative">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" 
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22.5C9.55228 22.5 10 22.0523 10 21.5C10 20.9477 9.55228 20.5 9 20.5C8.44772 20.5 8 20.9477 8 21.5C8 22.0523 8.44772 22.5 9 22.5Z" stroke="#0B0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 22.5C20.5523 22.5 21 22.0523 21 21.5C21 20.9477 20.5523 20.5 20 20.5C19.4477 20.5 19 20.9477 19 21.5C19 22.0523 19.4477 22.5 20 22.5Z" stroke="#0B0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 1.5H5L7.68 14.89C7.77144 15.3504 8.02191 15.764 8.38755 16.0583C8.75318 16.3526 9.2107 16.509 9.68 16.5H19.4C19.8693 16.509 20.3268 16.3526 20.6925 16.0583C21.0581 15.764 21.3086 15.3504 21.4 14.89L23 6.5H6" stroke="#0B0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            <span className="min-w-[20px] h-5 flex items-center justify-center rounded-full bg-accent text-light text-[10px] absolute ltr:-right-1/2 rtl:-left-1/2 -top-1/2">1</span></button>
            <a className="" href="/become-seller">
            <svg width="24" height="24" viewBox="0 0 14 19" fill="none" stroke="currentColor"
             stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" 
             xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99984 8.33342C8.84079 8.33342 10.3332 6.84103 10.3332 5.00008C10.3332 3.15913 8.84079 1.66675 6.99984 1.66675C5.15889 1.66675 3.6665 3.15913 3.6665 5.00008C3.6665 6.84103 5.15889 8.33342 6.99984 8.33342Z" stroke="#121212" stroke-width="1.5"></path><path d="M6.99984 17.5002C10.2215 17.5002 12.8332 16.0078 12.8332 14.1668C12.8332 12.3259 10.2215 10.8335 6.99984 10.8335C3.77818 10.8335 1.1665 12.3259 1.1665 14.1668C1.1665 16.0078 3.77818 17.5002 6.99984 17.5002Z" stroke="#121212" stroke-width="1.5"></path></svg></a></div></div>
      </div>

          {/* <!-- mobile button goes here --> */}
          {/* <div className="md:hidden flex items-center">
            <button className="mobile-menu-button"  onClick={toggleMenu}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div> */}
          <div className="md:hidden flex items-center">
              <button
                className="mobile-menu-button"
                onClick={toggleMenu}
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
    </div>
  </div>

          {/* <!-- mobile menu --> */}
          <div  className={`mobile-menu ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}  >
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">New Arrival</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Tools</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Careers</a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
          
        </div>

        </nav>


</div>
    );
  }
  