import "./styles.css";
import Table from "./table";
import { BarChart } from "./BarChart";
export default function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="b-heading">
          <div>Bearing 1</div>
          <div>Bearing 2</div>
          <div>Bearing 3</div>
        </div>
        <div className="bearing-table">
          <Table />
        </div>
        <BarChart />
      </div>
    </div>
  );
}
