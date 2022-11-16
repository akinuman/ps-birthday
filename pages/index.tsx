import type { NextPage } from "next";
import GoogleMap from "../components/GoogleMap";
import PartnersList from "../components/PartnersList";

const Home: NextPage = () => {
  return (
    <div className="container py-4 flex flex-col md:flex-row gap-5">
      <GoogleMap />
      <PartnersList />
    </div>
  );
};

export default Home;
