import React from "react";
import { bookingHistory } from "../../constants";
import InfoCard from "../InfoCard";

export default function BookingCard() {
  return (
    <div className="rounded-lg bg-primary mt-5 shadow-custom">
      <div className="card-header flex justify-start items-center px-5 py-4 border-b border-borderPrimary">
        <p className="counter text-primary text-white w-6 h-6 rounded-full bg-accent justify-center font-murecho text-sm flex items-center">
          1
        </p>
        <div className="flex justify-between items-center w-full pl-4">
          <div>
            <h2 className="text-lg font-semibold leading-6 text-title font-murecho">
              {bookingHistory.STFL17121182045413.tripSummery}
            </h2>
            <ul className="trip-details-list">
              <li className="inline relative px-3 pl-0 leading-4  text-13px text-customGray font-normal font-murecho">
                {bookingHistory.STFL17121182045413.tripType}
              </li>
              <li className="inline relative px-3 text-13px leading-4 text-customGray font-normal font-murecho">
                {bookingHistory.STFL17121182045413.date}
              </li>
              <li className="inline relative px-3 text-13px leading-4 text-customGray font-normal font-murecho">
                {bookingHistory.STFL17121182045413.stop}
              </li>
            </ul>
          </div>
          <div>
            <span className="w-16 h-6 font-medium bg-secondaryBg text-accent text-xs rounded-3xl flex items-center justify-center">
              {bookingHistory.STFL17121182045413.tripDuration}
            </span>
          </div>
        </div>
      </div>
      <div className="py-5">
        {bookingHistory?.STFL17121182045413?.tripDetails.map((item, key) => (
          <InfoCard key={key} tripItem={item} />
        ))}
      </div>
    </div>
  );
}
