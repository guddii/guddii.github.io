import Image from "next/image";
import guddii from "./guddii.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GUDDii",
};

const Home = () => {
  return (
    <div>
      <Image src={guddii} alt="GUDDii" />
    </div>
  );
};

export default Home;
