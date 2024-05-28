import { deprecate } from "util";

export const breadcrumbItems = [
  {
    label: "Home",
    url: "/",
    isLast: false,
  },
  {
    label: "Booking History",
    url: "/booking-history",
    isLast: false,
  },
  {
    label: "Flight",
    url: "/booking-history/flight",
    isLast: false,
  },
  {
    label: "STFL17121182045413",
    url: "/",
    isLast: true,
  },
];

export const bookingHistory = {
  STFL17121182045413: {
    tripType: "Round Trip",
    tripSummery: "DAC → JFK",
    date: "25 Mar - 4 Apr 2023",
    stop: "1 Stop",
    tripDuration: "33h 20m",
    tripDetails: [
      {
        location: "Dhaka",
        type: "departure",
        airportName: "Hazrat Shahjalal International Airport",
        terminal: "Terminal 1",
        segmentLoc: "DAC - DXB",
        segmentDuration: "12 hr 20 min",
        startTime: "07:30 PM",
        startDate: "28 Mar, Friday",
        endDate: "29 Mar, Saturday",
        endTime: "08:50 AM",
        airlineName: "Turkish Airlines",
        flightNo: "TUR467",
        airbusName: "Airbus Industrie 737-800-738",
        class: "ECONOMY-Y (O)",
        warning:
          "Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check your visa requirements as per your nationality",
      },
      {
        location: "Dubai",
        type: "layover",
        layoverDuration: "12 hr 20 min",
        airportName: "Dubai International Airport",
        segmentLoc: "DAC - DXB",
        segmentDuration: "12 hr 20 min",
        startTime: "07:30 PM",
        startDate: "28 Mar, Friday",
        endDate: "29 Mar, Saturday",
        endTime: "08:50 AM",
        airlineName: "Turkish Airlines",
        flightNo: "TUR467",
        airbusName: "Airbus Industrie 737-800-738",
        class: "ECONOMY-Y (O)",
      },
      {
        location: "New York",
        type: "end",
        terminal: "Terminal 4",
        airportName: "John F Kennedy International Airport",
        segmentLoc: "",
        segmentDuration: "",
        startTime: "",
        startDate: "",
        endDate: "",
        endTime: "",
        airlineName: "Turkish Airlines",
        flightNo: "TUR467",
        airbusName: "Airbus Industrie 737-800-738",
        class: "ECONOMY-Y (O)",
      },
    ],
  },
};
