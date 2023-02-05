import React from "react";

export const TableComponent = ({
  data,
  headers,
}: {
  data: any[];
  headers: string[];
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          {headers.map((h) => (
            <th scope="col">{h}</th>
          ))}
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((d, index) => (
          <tr>
            <th scope="row">{index}</th>
            <TableRow data={d} size={headers.length} />
            <th>
              <button className="btn btn-danger">Delete</button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function TableRow({ data, size }: { data: any; size: number }): JSX.Element {
  return (
    <>
      {Object.keys(data)
        .slice(0, size)
        .map((key) => (
          <td>{data[key]}</td>
        ))}
    </>
  );
}
