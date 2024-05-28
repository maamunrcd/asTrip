import React from "react";
import Sidebar from "../Sidebar";
import { breadcrumbItems } from "../../constants/index";
import BreadcrumbList from "../../components/Breadcrumb";
import BookingCard from "../BookingCard";

export default function Content() {
  return (
    <div className="mx-auto max-w-[1140px] px-4 mt-5">
      <div className="content-wrapper flex">
        <Sidebar></Sidebar>
        <div className="content">
          <BreadcrumbList breadcrumbList={breadcrumbItems} />
          <BookingCard />
        </div>
      </div>
    </div>
  );
}
