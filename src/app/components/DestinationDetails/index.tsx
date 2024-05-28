// components/DestinationDetails.tsx
import React from "react";
import DestinationHeader from "../DestinationHeader";
import AirlineDetails from "../AirlineDetails";

interface TripItem {
  type: string;
  location: string;
  layoverDuration?: string;
  terminal?: string;
  airportName: string;
  segmentLoc: string;
  segmentDuration: string;
  startTime: string;
  startDate: string;
  endTime: string;
  endDate: string;
  airlineName: string;
  flightNo: string;
  airbusName: string;
  class: string;
  warning?: string;
}

interface DestinationDetailsProps {
  tripItem: TripItem;
}

const DestinationDetails: React.FC<DestinationDetailsProps> = ({
  tripItem,
}) => {
  return (
    <div className="destination-details">
      <DestinationHeader tripItem={tripItem} />
      {tripItem.type !== "end" && <AirlineDetails tripItem={tripItem} />}
    </div>
  );
};

export default DestinationDetails;
