import { NextPage } from "next";
import PrimaryNavigation from "../molecules/PrimaryNavigation";
import { CommonSEO } from "../SEO";
import { useRouter } from "next/router";

type props = {
  children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
  const router = useRouter();
  const myPath = (): string => {
    let path: string = "";
    if (router.asPath == "/") {
      path = "Gdrive as database image";
    } else {
      path = router.asPath.replace("/", "");
    }
    return path;
  };

  return (
    <>
      <div className="min-h-screen flex w-full flex-col dark:bg-[#1a202c] px-[6%]">
        <CommonSEO
          title={myPath()}
          description="Description of Create Next Page by aing"
        />
        {children}
      </div>
    </>
  );
};

export default BlankTemplate;
