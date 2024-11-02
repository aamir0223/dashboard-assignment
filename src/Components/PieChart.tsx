import { ResponsivePie } from "@nivo/pie";
import React from "react";
import { animated, useSpring } from "react-spring";



const PieChart: React.FC<{
  setHoverValue?: any;
  data: any;
  heading: any
}> = ({ setHoverValue, data, heading }) => {

  const repeatedColors = Array.from(
    { length: Math.ceil(data.length / colors?.length) },
    () => colors
  ).flat();

  const handleMouseEnter = (data: any, event: any) => {
    setHoverValue(data?.label);

  };

  const handleMouseLeave = () => {
    setHoverValue();
    // Your custom logic here
  };
  const animationProps = useSpring({
    opacity: 1,
  });

  return (
    <div className="pie" >
      <h2>{heading}</h2>
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        startAngle={0}
        activeInnerRadiusOffset={15}
        activeOuterRadiusOffset={11}
        borderWidth={0.6}
        colors={[...repeatedColors]}
        borderColor={"#fff"}
        arcLinkLabelsTextOffset={7}
        enableArcLinkLabels={false}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsOffset={-15}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsDiagonalLength={10}
        arcLinkLabelsStraightLength={15}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        enableArcLabels={false}
        arcLabel={(e) => e.id + " (" + e.value + ")"}
        arcLabelsRadiusOffset={0}
        transitionMode="middleAngle"
        legends={[]}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        arcLinkLabelComponent={(d: any) => {
          return (
            <animated.g style={animationProps}>
              <animated.path
                fill="none"
                stroke={d.style.linkColor}
                strokeWidth={d.style.thickness}
                d={d.style.path}
              />
              <animated.text
                key={`arcLinkLabel_segment_closurereasons_${d.label}`}
                transform={d.style.textPosition}
                textAnchor={d.style.textAnchor}
                dominantBaseline="central"
              >
                {/* Split the label into multiple lines if its length exceeds 30 characters */}

                <tspan x="0px" y="0px" style={{ fontSize: "10px" }}>
                  {d?.label.length >= 15
                    ? d?.label.substring(0, 15) + "..."
                    : d?.label}
                </tspan>

                <tspan x="0" dy="14px" style={{ fontSize: "10px" }}>
                  {d?.datum?.data?.lebel} (
                  {d?.datum?.data?.value})
                </tspan>
              </animated.text>
            </animated.g>
          );
        }}
        tooltip={(da: any) => (
          <div
            style={{
              background: "white",
              padding: "5px 10px",
              width: "fit-content",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                background: da?.datum?.color,
                borderRadius: "100%",
              }}
            ></div>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#121212",
              }}
            >
              {da?.datum?.data.id}{" "}
              <span style={{ fontWeight: "600" }}>
                : {da?.datum?.data?.label}
                {`${da?.datum?.data?.value}`}
              </span>
            </p>
          </div>
        )}
      />
    </div>
  );
};

export default PieChart;
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