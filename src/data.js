export const data = [
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
    },
  ];

  const cost = data.length * 3 * 32;
  let delayTime = 0;
  data.forEach((delay) => {delayTime = delayTime + delay.delay1 + delay.delay2 + delay.delay3})
  const costDowntime = data.length * 20 * 10;
  const costMechanic = data.length * 20 * 30;
  let totalCostCurrent = cost + delayTime + costDowntime + costMechanic
  console.log(totalCostCurrent)

