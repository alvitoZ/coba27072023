import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Image from "next/image";

const coba = () => {
  return (
    <BlankTemplate>
      <PrimaryNavigation />
      <article>
        <h2>Who is Kita?</h2>
        <p>
          For the blind, she is vision. For the hungry, she is the chef. For the
          thirsty, she is water. If Kita thinks, I agree. If Kita speaks, I’m
          listening. If Kita has a million fans, I am one of them. If Kita has
          ten fans, I am one of them. If Kita has only one fan, that is me. If
          Kita has no fans, I no longer exist. If the whole world is against
          Kita , I am against the whole world. I will love Kita until my very
          last breath.
        </p>
      </article>
      <Image
        src="/uploads/whois.jpeg"
        alt="kita ikuyo"
        width={901}
        height={1600}
        priority
      />
    </BlankTemplate>
  );
};

export default coba;
