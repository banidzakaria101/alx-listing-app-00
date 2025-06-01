import React from "react";
import { PropertyProps } from "../interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{property.name}</h3>
        <p className="text-sm text-gray-500 mb-2">
          {property.address.city}, {property.address.state}, {property.address.country}
        </p>
        <p className="text-yellow-600 font-medium mb-1">⭐ {property.rating}</p>
        <p className="text-gray-800 font-semibold text-lg">
          ${property.price.toLocaleString()}{" "}
          <span className="text-sm text-gray-500">/night</span>
        </p>
        {property.discount && (
          <p className="text-green-600 text-sm font-bold mt-1">
            {property.discount}% OFF
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
