import { useTable } from "react-table";
import React, { useEffect, useMemo } from "react";
import Tools from "../Tools/Tools";
import { stringToCamelCase } from "utils/helpers/stringToCamelCase";


export function getColumns(titles: string[]) {
  return titles.map((title) => ({
    Header: title,
    accessor: stringToCamelCase(title),
  }));
}

function getDataFromLocalStorage() {
  let dataFromLocalStorage = localStorage.getItem("data") || "[]";
  const parsedData = JSON.parse(dataFromLocalStorage);
  parsedData.forEach((item:any) => {
    item.tools = <Tools/>
   
  });
  console.log(parsedData);
  return parsedData

  
}

function openDataUrl(dataUrl: string) {
    
    const iframe = "<iframe width='100%' height='100%' src='" + dataUrl + "'></iframe>"
    const urlWindow = window.open();
    urlWindow?.document.open();
    urlWindow?.document.write(iframe);
    urlWindow?.document.close();
}

export default function TableInfo() {
  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const data = useMemo(() => getDataFromLocalStorage(), []);

  const columns = useMemo(
    () =>
      getColumns([
        "Board Pn",
        "Board Sn",
        "Tech Name",
        "Board Data Base Name",
        "Cause Failure",
        "Solution",
        "Date",
        "Link For File",
        "Tools"
      ]),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                const columnTitle = cell.column.Header;

                if (columnTitle === "Link For File") {
                  if (cell.value) {
                    return (
                      <td {...cell.getCellProps()}>
                        <button
                          onClick={() => {
                            openDataUrl(cell.value);
                          }}
                        >
                          Link
                        </button>
                      </td>
                    );
                  }
                }
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
