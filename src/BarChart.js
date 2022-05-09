import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
const BarChart = () => {
  const data = [
    {
      id: 1,
      lifecycle1: 1000,
      delay1: 5,
      lifecycle2: 1300,
      delay2: 10,
      lifecycle3: 1200,
      delay3: 15
    },
    {
      id: 2,
      lifecycle1: 1000,
      delay1: 10,
      lifecycle2: 1500,
      delay2: 10,
      lifecycle3: 1000,
      delay3: 15
    }
  ];

  const cost = data.length * 3 * 32;
  let delayTime = 0;
  data.forEach((delay) => {
    delayTime = delayTime + delay.delay1 + delay.delay2 + delay.delay3;
  });
  const costDowntime = data.length * 20 * 10;
  const costMechanic = data.length * 20 * 30;
  let totalCostCurrent = cost + delayTime + costDowntime + costMechanic;
  console.log(totalCostCurrent);

  const costProp = data.length * 32;
  let delayTimeProp = 0;
  data.forEach((delay) => {
    delayTimeProp = delayTimeProp + delay.delay1;
  });
  const costDowntimeProp = data.length * 40 * 10;
  const costMechanicProp = data.length * 40 * 5;
  let totalCostProp =
    costProp + delayTimeProp + costDowntimeProp + costMechanicProp;
  console.log(totalCostProp);

  return (
    <div>
      <Bar
        data={{
          labels: ["Current", "Proposed"],
          // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
          datasets: [
            {
              label: "Cost of Current vs Proposed Method",
              data: [totalCostCurrent, totalCostProp],
              // you can set indiviual colors for each bar
              backgroundColor: ["red", "blue", "rgba(255, 255, 255, 0.6)"],
              borderWidth: 1
            }
          ]
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export { BarChart };
