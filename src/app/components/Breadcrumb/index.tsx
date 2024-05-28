import Link from "next/link";
import React from "react";
import RightArrow from "../../assets/img/right-arrow.svg";
import Image from "next/image";
import styles from "../Breadcrumb/Breadcrumb.module.scss";

interface BreadcrumbItem {
  label: string;
  url: string;
  isLast: boolean;
}

const Breadcrumb: React.FC<BreadcrumbItem> = ({ label, url, isLast }) => {
  if (isLast) {
    return <span className="text-accent">{label}</span>;
  } else {
    return (
      <>
        <Link className="text-customGray" href={url}>
          {label}
        </Link>
        <Image
          className="align-right mx-3 mt-1"
          src={RightArrow}
          alt="arrow image"
        />
      </>
    );
  }
};

interface BreadcrumbListProps {
  breadcrumbList: BreadcrumbItem[];
}

const BreadcrumbList: React.FC<BreadcrumbListProps> = ({ breadcrumbList }) => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ol className="breadcrumb-list">
        {breadcrumbList.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item inline-flex font-murecho text-13px font-normal text-customGray ${
              index === 0 ? "pl-0" : ""
            }`}
          >
            <Breadcrumb {...item} />
          </li>
        ))}
      </ol>
    </nav>
  );
};
export default BreadcrumbList;
