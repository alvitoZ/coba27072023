import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Form from "./Form";

const PrimaryNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);

  return (
    <>
      <nav
        className="
        dark:bg-[#1a202c]
          w-full
          py-4
          md:pt-16
          text-lg text-gray-700
        "
      >
        <div
          className={`h-16 w-8 cursor-pointer md:hidden flex items-center`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image src="/static/svgs/dehaze.svg" alt="s" width={25} height={25} />
        </div>

        <div
          className={`${
            isMenuOpen ? "hidden" : "block"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <div
            className="
              pt-4
              md:flex
              md:justify-between
              md:items-center
              md:pt-0
              md:w-full
              pb-8
              border-b-[3px]
              "
          >
            <div className="md:flex md:flex-row md:gap-20">
              <div className="flex items-center">
                <Link href={"/"}>Homepage</Link>
              </div>
              <div className="flex items-center ">
                <Link href={"/coba"}>about me</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default PrimaryNavigation;
