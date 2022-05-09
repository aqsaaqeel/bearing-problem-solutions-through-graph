import { data } from "./data";
import { useState } from "react";
// import { Bar } from "react-chartjs-2"

export default function Table() {
  const [tableData, setTableData] = useState(data);
  console.log(tableData)
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Simulation</th>
          <th>Life Cycle</th>
          <th>Delay</th>
          <th>Life Cycle</th>
          <th>Delay</th>
          <th>Life Cycle</th>
          <th>Delay</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((dataItem) => {
          return (
            <tr>
              <td>{dataItem.id}</td>
              <td>{dataItem.lifecycle1}</td>
              <td>{dataItem.delay1}</td>
              <td>{dataItem.lifecycle2}</td>
              <td>{dataItem.delay2}</td>
              <td>{dataItem.lifecycle3}</td>
              <td>{dataItem.delay3}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <h2>Add new Simulation</h2>
    <form>
      <input type="number" name = "lifecycle1" placeholder ="Bearing 1 lifecycle"/>
      <input type="number" name = "delay1" placeholder ="Bearing 1 delay"/>
      <input type="number" name = "lifecycle2" placeholder ="Bearing 1 lifecycle"/>
      <input type="number" name = "delay2" placeholder ="Bearing 2 delay"/>
      <input type="number" name = "lifecycle3" placeholder ="Bearing 3 lifecycle"/>
      <input type="number" name = "delay3" placeholder ="Bearing 3 delay"/>
      <button type= "submit">Add</button>
    </form>

    {/* 5 */}
  </>
  );
}
