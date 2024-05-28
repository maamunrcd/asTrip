// components/AirlineDetails.tsx
import React from "react";
import Icon from "../Icon";
import AirlineIcon from "../../assets/img/airline.svg";
import WarningIcon from "../../assets/img/Warning.svg";
import planeIcon from "../../assets/img/plane.svg";

interface TripItem {
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

interface AirlineDetailsProps {
  tripItem: TripItem;
}

const AirlineDetails: React.FC<AirlineDetailsProps> = ({ tripItem }) => {
  return (
    <>
      <div className="text-white font-murecho text-sm flex items-center w-full">
        <Icon src={AirlineIcon} alt="Airline icon" />
        <div className="py-5 ml-4 flex justify-between items-center w-full">
          <div className="w-1/3">
            <h3 className="text-lg leading-6 font-semibold text-title font-murecho">
              {tripItem.segmentLoc}
            </h3>
            <p className="text-sm leading-5 text-customGray font-murecho">
              {tripItem.segmentDuration}
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="text-lg leading-6 font-semibold text-title font-murecho">
              {tripItem.startTime}
            </h3>
            <p className="text-sm leading-5 text-customGray font-murecho">
              {tripItem.startDate}
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="text-lg leading-6 font-semibold text-title font-murecho">
              {tripItem.endTime}
            </h3>
            <p className="text-sm leading-5 text-customGray font-murecho">
              {tripItem.endDate}
            </p>
          </div>
        </div>
      </div>
      <div className="py-4 pl-7 ml-3 relative">
        <div className="flex">
          <div className="w-1/3">
            <p className="text-sm leading-5 font-medium text-lightGray font-murecho">
              {tripItem.airlineName}
            </p>
            <p className="text-sm leading-5 text-lightGray font-murecho mt-1">
              Flight no : {tripItem.flightNo}
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-sm leading-5 text-title font-murecho">
              {tripItem.airbusName}
            </p>
            <p className="text-sm leading-5 text-lightGray font-murecho mt-1">
              Class :{" "}
              <span className="font-semibold text-customGray">
                {tripItem.class}
              </span>
            </p>
          </div>
        </div>
        {tripItem.warning && (
          <div className="border border-[#FFE1C2] bg-[#FFEEDB] px-3 py-2 rounded-md flex mt-4">
            <Icon className="mr-2" src={WarningIcon} alt="warning icon" />
            <p className="text-xs text-lightGray font-normal">
              Technical stoppage at Malpensa International Airport (Milano).
              Before booking this flight please check your visa requirements as
              per your nationality
            </p>
          </div>
        )}
        <Icon
          className="absolute -left-[7px] top-0 bottom-0 m-auto"
          src={planeIcon}
          alt="plane icon"
        />
        <div className="absolute left-0 top-0 w-0.5 h-2/6 rounded-sm bg-[#D8E1EB]"></div>
        <div className="absolute left-0 bottom-0 w-0.5 h-2/6 rounded-sm bg-[#D8E1EB]"></div>
      </div>
    </>
  );
};

export default AirlineDetails;
