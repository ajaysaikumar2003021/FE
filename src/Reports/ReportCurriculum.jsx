import React from "react";
import TimeRange from './TimeRange'
import { useReactToPrint } from "react-to-print";

const ReportCurriculum = () => {
  return (
    <div className="container-fluid">
      <h2 className="curriculum-head">Report Curriculum</h2>
      <TimeRange />
      <div className="container report-curriculum">
        <table class="table table-striped table-bordered table-curriculum">
          <thead>
            <tr>
              <th scope="col">Sustainability Course Title</th>
              <th scope="col">Department</th>
              <th scope="col">Level of Course</th>
              <th scope="col">Course Type</th>
              <th scope="col">Semester Offered</th>
              <th scope="col">Year Offered</th>
              <th scope="col">Brief Course Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportCurriculum;
