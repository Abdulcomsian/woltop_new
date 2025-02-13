import { useEffect } from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Confirm Logout
          </h2>
          <p className="text-gray-600 mb-6">
            Are you sure you want to log out? You will need to log in again to
            access your account.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              className="px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-200"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-6 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-200"
              onClick={onConfirm}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;