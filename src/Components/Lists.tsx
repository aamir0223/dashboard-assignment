import styled from "@emotion/styled";
import Tooltip, { tooltipClasses, TooltipProps } from "@mui/material/Tooltip";
import { useEffect, useRef, useState } from "react";

const Lists: React.FC<{ hoverValue: any; data: any }> = ({
  hoverValue,
  data,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [itemsPerRow, setItemsPerRow] = useState<number>(10); // Initial number of items per row

  const repeatedColors = Array.from(
    { length: Math.ceil(data.length / colors?.length) },
    () => colors
  ).flat();


  // Log the length of sortedList

  const chunks = [];

  // Populate chunks array based on itemsPerRow
  for (let i = 0; i < data?.length; i += itemsPerRow) {
    chunks.push(data.slice(i, i + itemsPerRow));
  }

  console.log("hoverValue", hoverValue)
  useEffect(() => {
    if (hoverValue !== undefined) {
      const element = document.getElementById(`lists-item-${hoverValue}`);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }


  }, [hoverValue]);

  return (
    <div
      ref={scrollRef}
      className="lists"

    >
      <div className="lists-container">
        {chunks.map((chunk, index) => (
          <>
            <div
              key={index}
              className="item"
              style={
                index != chunks.length - 1 && index != chunks.length - 2
                  ? { borderBottom: "1px solid rgba(0,0,0,0.1)" }
                  : {}
              }
            >
              {chunk.map((itemData: any, itemIndex: any) => (
                <div
                  key={itemIndex}
                  id={`lists-item-${itemData.label}`}
                  className={
                    hoverValue === itemData.label
                      ? "item-list active"
                      : "item-list"
                  }
                >
                  <div className="list-name-v2">
                    <div className="name">
                      <p >{index * itemsPerRow + itemIndex + 1}.</p>
                      <LightTooltip title={itemData?.label} placement="top">
                        <p className="uni">{itemData?.label}</p>
                      </LightTooltip>
                    </div>
                    <button className="button">
                      {" "}

                      {`${itemData?.value}`}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Lists;

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(225, 233, 245, 1)",
    color: "#121212",
    boxShadow: "none",
    fontSize: 10,
    fontWeight: 400,
    padding: "7px 10px",
    backgroundClip: "padding-box",
    marginRight: "140px",
  },
}));
export const colors = [
  "#005AC0",
  "#007DB7",
  "#2E84E6",
  "#6A8ED9",
  "#6499BE",
  "#97B5E4",
  "#028D77",
  "#40AD9D",
  "#7FC6BB",
  "#B8E0D2",
  "#81C497",
  "#6EB285",
  "#7151BF",
  "#8C76C3",
  "#AA94DA",
  "#C793E3",
  "#C271C9",
  "#A660C7",
  "#FBB5AB",
  "#F5B497",
  "#FEB26E",
  "#F4D165",
  "#FFE38B",
  "#E45F8D",
  "#FF6C6C",
  "#F58168",
  "#F88",
  "#F19585",
  "#FFA2A2",
  "#FFBEC1"
];