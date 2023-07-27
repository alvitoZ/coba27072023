import React, { useState } from "react";
import CardBG from "../atoms/CardBG";
import Viewer from "react-viewer";
import { ImageDecorator } from "react-viewer/lib/ViewerProps";
import { data, datas } from "types/data";

type Images = Omit<data, "name" | "desc">;

type Props = {
  datas: datas;
  images: Images[];
};

const Section1 = ({ datas, images }: Props) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <div
      className={`flex md:justify-start justify-center flex-wrap border-b-[3px] gap-1 pb-4 `}
    >
      {datas.map((e, i) => {
        return (
          <CardBG
            onClick={() => {
              setActiveIdx(i);
              setVisible(true);
            }}
            key={i}
            image={e.src ? e.src : "/uploads/default.jfif"}
            bgColor="bg-blue-300"
            name={e.name}
            desc={e.desc}
          />
        );
      })}
      <Viewer
        visible={visible}
        onClose={() => setVisible(false)}
        images={images}
        zIndex={2000}
        activeIndex={activeIdx}
        downloadable
        downloadInNewWindow
        onMaskClick={() => setVisible(false)}
        onChange={(_, idx) => setActiveIdx(idx)}
        zoomSpeed={0.15}
      />
    </div>
  );
};

export default Section1;
