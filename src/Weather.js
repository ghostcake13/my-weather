import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      {" "}
      <form>
        <div className="row">
          <div
            className="
          col-9"
          >
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            {" "}
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        {" "}
        <li>Wednesday 7:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAdFJREFUeNrt2+1tgzAQBmBGYARGYAQWiNQRMkJGYARGYIRsUEbwX/5lBDa4niMrQpSqYN8d/jikV2oS9YwfwtmoagUAVcmpFEABFEABFGD7pucxz3ODGTAGA5sY91lTCR8iAG5ycDB9NgA4mfqPK/5f7O/USQMETP6DkDrAEDB5sduBBcA1PCDIwt0YuQAGIgBwtXqu1YMLwBACHIaKCQAuyunVgxzAdX9IBSFHgFO3Q263wDqNOAAO2hKvAOzfAhIAt+4/I5n4qZ1kMAAO1LkNC8QWdgA3eYg1rADua7+UDDDFPHlWANftIcHYi3anABgTBVjvFpsQgFfiAJ9HbV8AyCTmNEAke33K3EsHmEq+Bd4ptQkGAYylA7RFA6SyFT6YZ7YPQyzLYG6H2J/HFUABCgK4fc8tpsdM9mffk5OoQw6AA3QYWKX3PGmROhwAZjPg5HniInVIAbD4YzOYzehx0mJ1yACwcI1ZNoPZ1/XJkxatQwkw7mg/PK6aaB0SgJ1GY2MIGhZ7HSoAszNgR9Cw2OsEA6TY+MgAUm18lABJNj5KgCm0YV1dJxSgD21YV9cJBWjdQC/MV+DDyiV19B8mFEABFEABFEABFEABFOB3fgDsHp230RVQOwAAAABJRU5ErkJggg=="
              alt="mostly cloudy"
              className="float-left"
            />
            <span className="temperature">-6</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
