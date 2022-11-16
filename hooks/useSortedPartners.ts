import { useCallback, useEffect, useState } from "react";
import { distanceBetweenTwoPoint } from "../helper/distanceBetweenTwoPoint";
import { IConvertedPersons, IRawPerson } from "../types/types";

const SOFIA_OFFICE = {
  latitude: "42.6665921",
  longitude: "23.351723",
};

const useSortedPartners = (partners: IRawPerson[]) => {
  const [sortedPartners, setSortedPartners] = useState<IConvertedPersons[]>();

  const sortPersonsWithDistance = useCallback(() => {
    const sortedList = partners.map((partner: IRawPerson) => {
      const withDistanceKey = {
        latitude: partner.latitude,
        longitude: partner.longitude,
        id: partner.partner_id,
        fullName: partner.name,
        distance: distanceBetweenTwoPoint(
          +partner.latitude,
          +partner.longitude,
          +SOFIA_OFFICE.latitude,
          +SOFIA_OFFICE.longitude
        ),
      };
      return withDistanceKey;
    });

    setSortedPartners(
      sortedList.sort(
        (a: IConvertedPersons, b: IConvertedPersons) => a.id - b.id
      )
    );
  }, [partners]);

  useEffect(() => {
    sortPersonsWithDistance();
  }, []);

  return sortedPartners;
};

export default useSortedPartners;
