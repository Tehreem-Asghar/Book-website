import Image from "next/image";
import "../../style/home.css";
import Button from "@/components/button";
import About from "./about/page";
import { SiBookstack } from "react-icons/si";
import { GiBookshelf } from "react-icons/gi";
import { FaLaptopCode, FaCode } from "react-icons/fa";
import { IoLogoCodepen } from "react-icons/io";
import { FeatureBooks } from "@/components/featureBooks";
import ContactPage from "./contact/page";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ overflowX: 'hidden' }}>
      <div className="main">
        <section className="sectionOne">
          <div className="text">
            <h2>Master Programming with Essential Books</h2>
            <p>
              Explore our selection of essential programming books, perfect for
              all skill levels. Enhance your coding journey and become a
              programming pro today!
            </p>
           <Link href={'/books'}>
            <Button
              text="Explore Now"
              style={{
                padding: "10px 20px",
                backgroundColor: "#3B1E54",
                color: "white",
                borderRadius: "5px",
                border: "2px solid #3B1E54",
                cursor: "pointer",
              }}
            />
            </Link>
          </div>
          <div className="image">
            <Image
              src={"/images/banner.png"}
              height={400}
              width={450}
              alt="Programming books banner"
            />
          </div>
        </section>
      </div>
      <section className="sectionTwo">
        <SiBookstack className="book" />
        <FaLaptopCode className="book" />
        <GiBookshelf className="book" />
        <FaCode className="book" />
        <IoLogoCodepen className="book" />
      </section>
      <section>
        <FeatureBooks />
      </section>

      <section>
        <ContactPage />
      </section>
      <section>
        <About />
      </section>
    </main>
  );
}
