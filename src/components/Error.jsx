import React from "react";
import { AlertTriangle, XCircle, SearchX } from "lucide-react";

export default function Error({ type, heading, description, info, button }) {
  return (
    <div className="flex items-center justify-center px-4 h-screen w-full">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-md text-center">
        {/* Warning Icon */}
        <div className="flex justify-center mb-2">
          {type === "warning" && (
            <AlertTriangle className="text-yellow-500" size={60} />
          )}
          {type === "error" && <XCircle className="text-red-700" size={60} />}
          {type === "not-found" && (
            <SearchX className="text-red-700" size={60} />
          )}
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">{heading}</h1>

        {/* Description */}
        <p className="font-medium text-lg">{description}</p>
        <p className="text-gray-500 text-sm mb-6">{info}</p>

        {/* Buttons */}
        {button}
      </div>
    </div>
  );
}
