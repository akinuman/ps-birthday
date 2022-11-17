import React from "react";
import { PARTNERS } from "../constants/partners";
import useSortedPartners from "../hooks/useSortedPartners";
import { IConvertedPersons } from "../types/types";

const PartnersList = () => {
  const sortedPartners = useSortedPartners(PARTNERS);
  return (
    <ul>
      {sortedPartners?.map((partner) => {
        if (partner.distance < 100)
          return <List key={partner.id} {...partner} />;
      })}
    </ul>
  );
};

export const List = ({ id, fullName, distance }: IConvertedPersons) => (
  <li className="flex flex-row gap-2">
    <h1>{id}.</h1>
    <h2>{fullName} - </h2>
    <h3>{distance} KM</h3>
  </li>
);

export default PartnersList;
