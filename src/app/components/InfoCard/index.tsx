import React from "react";
import DestinationDetails from "../DestinationDetails";

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

interface InfoCardProps {
  tripItem: TripItem;
}

const InfoCard: React.FC<InfoCardProps> = ({ tripItem }) => {
  return (
    <div className="card-content px-5">
      <DestinationDetails tripItem={tripItem} />
    </div>
  );
};

export default InfoCard;
