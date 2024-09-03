import "ag-grid-community/styles/ag-grid.css";
// Optional Theme applied to the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import { useEffect, useState } from "react";
import { investments } from "../../mocks/investments";
import Text from "../Text/Text";
import { useFinance } from "../../hooks/useFinance";
import Graph from "../Graph";
import { DOLAR } from "../../constants";
import { convertToBRL, getReducedValue } from "../../utils";
import Indicators from "../Indicators";

const Table = ({ columns, data }) => {
  return (
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: 500, marginTop: "48px" }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact rowData={data} columnDefs={columns} />
    </div>
  );
};

export default Table;
