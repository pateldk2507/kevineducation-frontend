import React, { useState, useRef } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import { useReactToPrint } from 'react-to-print';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function StudentTable({ data }) {
  const [filterText, setFilterText] = useState('');
  const tableRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  // Define columns
  const columns = [
    { name: 'ID', selector: row => row.id, sortable: true },
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Email', selector: row => row.email, sortable: true },
    { name: 'Mobile', selector: row => row.mobile, sortable: true },
    { name: 'Date of Birth', selector: row => row.dateOfBirth, sortable: true },
    { name: 'Gender', selector: row => row.gender, sortable: true },
  ];

  // Filtered rows based on search
  const filteredData = data.filter(
    item =>
      item.name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.email?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.mobile?.includes(filterText)
  );

  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between mb-2">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="form-control w-25"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
        />

        <div>
          {/* Export CSV */}
          <CSVLink
            data={filteredData}
            filename={"students.csv"}
            className="btn btn-success me-2"
          >
            Export CSV
          </CSVLink>

          {/* Print */}
          <button className="btn btn-primary" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div ref={tableRef}>
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          striped
          responsive
        />
      </div>
    </div>
  );
}
