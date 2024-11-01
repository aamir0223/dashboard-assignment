import { ResponsiveBar } from '@nivo/bar'
import React, { useEffect, useState } from 'react'

const BarGraph: React.FC<{ data: any }> = ({ data }) => {
  const [barData, setBarData] = useState<any>([]);


  useEffect(() => {
    if (data) {
      const yearRangeMap: any = {};

      data.forEach((item: any) => {
        const modelYear = item['Model Year'];
        const electricRange = parseInt(item['Electric Range'], 10);

        if (!isNaN(electricRange)) {
          if (!yearRangeMap[modelYear]) {
            yearRangeMap[modelYear] = { totalRange: 0, count: 0 };
          }
          yearRangeMap[modelYear].totalRange += electricRange;
          yearRangeMap[modelYear].count += 1;
        }
      });

      // Convert aggregated data into an array of objects for the chart
      const processedData = Object.keys(yearRangeMap).map(year => ({
        year,
        electricRange: Math.round(yearRangeMap[year].totalRange / yearRangeMap[year].count) // Calculate average
      }));

      setBarData(processedData);
    }
  }, [data])


  return (
    <div className='line-graph'>

      {/* <h2>Electric Range by Model Year</h2> */}
      <ResponsiveBar
        data={barData}
        keys={['electricRange']}
        indexBy="year"
        margin={{ top: 50, right: 20, bottom: 50, left: 70 }}
        padding={0.2}
        layout="vertical"
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={["#59A3F5",]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        enableGridY={false}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Model Year',
          legendPosition: 'middle',
          legendOffset: 40
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Average Electric Range',
          legendPosition: 'middle',
          legendOffset: -50
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[

        ]}
        animate={true}

      />
    </div>
  )
}

export default BarGraph