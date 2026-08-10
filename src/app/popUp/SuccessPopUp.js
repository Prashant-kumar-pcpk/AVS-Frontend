"use client";

export default function SuccessPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-8 w-[520px] text-center">
        <h2 className="text-3xl font-bold text-green-600">Thank You!</h2>

        <p className="mt-4 text-gray-700">
          Your brochure has been downloaded successfully.
        </p>

        <p className="mt-4">Our team will contact you shortly.</p>

        <button
          onClick={onClose}
          className="mt-4 bg-cyan-800 text-white px-8 py-3 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}
