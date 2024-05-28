import React from "react";
import Icon from "../Icon";
import LocationIcon from "../../assets/img/location.svg";
import ActiveLocationIcon from "../../assets/img/activeLocation.svg";

interface TripItem {
  type: string;
  location: string;
  layoverDuration?: string;
  terminal?: string;
  airportName: string;
}

interface DestinationHeaderProps {
  tripItem: TripItem;
}

const DestinationHeader: React.FC<DestinationHeaderProps> = ({ tripItem }) => {
  return (
    <div className="text-white font-murecho text-sm flex items-center w-full">
      <Icon
        src={tripItem.type === "end" ? ActiveLocationIcon : LocationIcon}
        alt="location icon"
      />
      <div
        className={`${
          tripItem.type === "layover" ? "bg-secondaryBg" : "bg-secondary"
        } location-info rounded-md px-5 py-3 ml-4 flex justify-between items-center w-full `}
      >
        <h6 className="text-13px text-title font-murecho font-medium">
          {tripItem.type === "departure"
            ? `Departure from ${tripItem.location}`
            : tripItem.type === "layover"
            ? `Layover at ${tripItem.location}: ${tripItem.layoverDuration}`
            : `Destination at ${tripItem.location}`}
        </h6>
        <p className="text-customGray text-13px font-murecho">
          {tripItem.terminal && (
            <span className="font-medium">{tripItem.terminal} : </span>
          )}
          {tripItem.airportName}
        </p>
      </div>
    </div>
  );
};

export default DestinationHeader;
