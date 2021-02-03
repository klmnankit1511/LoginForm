import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container-fliud body">
      <div className="head">
        <h1 className="head-text text-center">RecStudentPortal</h1>
      </div>
      <br />
      <div className="col-lg-4 col-sm-1 col-md-3" />
      <div className="content col-lg-4 col-md-6 col-sm-10">
        <h1>SIGNUP</h1>
        <p>An Account for Everything</p>
        <hr />
        <form>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            style={{ width: "50%", marginTop: "1%" }}
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Number"
            style={{ marginLeft: "10%", width: "40%" }}
          />
          <br />

          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            style={{ width: "100%" }}
          />
          <br />

          <select className="branch">
            <option>Branch</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>EE</option>
            <option>ME</option>
            <option>CE</option>
            <option>BSH</option>
            <option>Other</option>
          </select>

          <select style={{ marginLeft: "20%" }} className="gender">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <br />

          <input
            type="password"
            name="pass"
            placeholder="Enter Password"
            style={{ width: "45%" }}
            className="pass"
          />
          <input
            type="password"
            name="passconfirm"
            placeholder="Confirm Password"
            style={{ width: "45%", marginLeft: "10%" }}
            className="pass"
          />
          <br />
          <input
            type="file"
            name="pass"
            placeholder="Enter Password"
            style={{ width: "45%" }}
            class="custom-file-input"
          />
          <br />
          <button className="but1">VERIFY</button>
        </form>
      </div>
      <div className="col-lg-4 col-sm-1" />
      <br />

      <div className="foot text-center col-lg-12">
        <img
          src="http://www.recstudentportal.com/private/picture/udaan.png"
          alt=""
        />
        <br />
        <hr style={{ width: "0%" }} />
      </div>
    </div>
  );
}
