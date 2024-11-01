import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Icon } from '@mui/material';

const Donald: React.FC<{ data: any, heading: any }> = ({ data, heading }) => {



  console.log("data", data)
  return (
    <div className="job-function-year">
      <h1>
        {heading}
      </h1>
      <>
        <div className="chart">
          <ResponsivePie
            data={data}
            margin={{ top: 0, left: 55, right: 55, bottom: 10 }}
            startAngle={-180}
            sortByValue={true}
            innerRadius={0.7}
            fit={false}
            colors={[
              "#59A3F5",
              "#91DDFE",
              "#147CF7",
              "#2756CD",
              "#3D6FF2",
              "#3E85B8",
              "#0FA9FF",
              "#60A5FA",
              "#0E3FBF",
              "#ABE",
              "#7D97DB",
              "#88A9FF",
            ]}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={0}
            arcLinkLabelsTextOffset={0}
            arcLinkLabelsTextColor="#ffffff"
            arcLinkLabelsOffset={-24}
            arcLinkLabelsDiagonalLength={0}
            arcLinkLabelsStraightLength={0}
            arcLinkLabelsThickness={0}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsTextColor="#404040"
            arcLabelsRadiusOffset={-0.5}
            arcLabelsSkipAngle={0}
            isInteractive={true}
            enableArcLabels={false}
            animate={false}
            legends={[]}
          />
        </div>
        <div className="wrapper-list">
          {data?.map((item: any) => (
            <div className="pie-legend-list">
              {" "}
              <div className="pie-legend-list-item">
                <div
                  className="dots"
                  style={{ background: `${item?.color}` }}
                ></div>
                <p>{item?.id} </p>
              </div>
            </div>
          ))}
        </div>
      </>

    </div>
  );
};

export default Donald;
