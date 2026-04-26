import React, { useState } from "react";
// import Table from "react-bootstrap/Table";
// import Modal from "react-bootstrap/Modal";
import axios from "axios";
import toast from "react-hot-toast";

const Pricing = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState({ name: "", message: "" });
  const [buyInfo, setBuyInfo] = useState({
    name: "",
    companyName: "",
    planType: "",
    mobileNumber: "",
  });
  const handlePlanBuy = async () => {
    const phoneRegex = /^\d{10}$/;

    if (!buyInfo.name || buyInfo.name.trim() === "") {
      setError({ name: "Name", message: "Please Enter Name" });
    } else if (!buyInfo.companyName || buyInfo.companyName.trim() === "") {
      setError({ name: "CompanyName", message: "Please Enter Company Name" });
    } else if (
      !buyInfo.mobileNumber ||
      buyInfo.mobileNumber.length !== 10 ||
      !phoneRegex.test(buyInfo.mobileNumber)
    ) {
      setError({
        name: "MobileNumber",
        message: "Please Enter Valid 10 digit Mobile Number",
      });
    } else {
      setError({ name: "", message: "" });
      try {
        const res = await axios.post("/plans/buy-plan-request", buyInfo);
        console.log(res);
        if (res.data.success) {
          setBuyInfo({
            name: "",
            companyName: "",
            planType: "",
            mobileNumber: "",
          });
          setShow(false);
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      } catch (e) {
        if (e.response.data.success) {
          toast.success(e.response.data.message);
        } else {
          toast.error(e.response.data.message);
        }
      }
    }
  };
  const handleClose = () => {
    setBuyInfo((prev) => ({ ...prev, planType: "" }));
    setShow(false);
  };

  const handleChange = (e) => {
    setBuyInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="my-5">
      <h1 className="text-center mb-4">
        Choose the plan that fits your journey
      </h1>
      <div className="container">
        {/* <Table
          responsive
          bordered
          className="text-center pricing-table"
          size="md"
        >
          <thead>
            <tr>
              <th style={{ fontSize: 20 }}>Feature</th>
              <th style={{ fontSize: 20 }}>Basic</th>
              <th style={{ fontSize: 20 }}>Standard</th>
              <th style={{ fontSize: 20 }}>Pro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Price</th>
              <th>₹299/ month</th>
              <th>₹499/ month</th>
              <th>₹799/ month</th>
            </tr>
            <tr>
              <th>Yarn Listing</th>
              <td>Add up to 10 yarns</td>
              <td>Add up to 50 yarns</td>
              <td>Add unlimited yarns</td>
            </tr>
            <tr>
              <th>Profile Page</th>
              <td>Included</td>
              <td>Included</td>
              <td>Included</td>
            </tr>
            <tr>
              <th>Search Page</th>
              <td>Yarn appears in search</td>
              <td>Yarn appears in search</td>
              <td>Yarn appears in search</td>
            </tr>
            <tr>
              <th>Analytics</th>
              <td>❌</td>
              <td>Views, wishlist, etc.</td>
              <td>Views, wishlist, etc.</td>
            </tr>
            <tr>
              <th>Tags</th>
              <td>❌</td>
              <td>Tag products (e.g. bestseller, in-demand, etc)</td>
              <td>Tag products (e.g. bestseller, in-demand, etc)</td>
            </tr>
            <tr>
              <th>Feature Yarn</th>
              <td>❌</td>
              <td>❌</td>
              <td>Feature up to 2 products on homepage</td>
            </tr>
            <tr>
              <th>Buy Plan</th>
              <td>
                <button
                  className="button-blue"
                  onClick={() => {
                    setBuyInfo((prev) => ({ ...prev, planType: "Basic" }));
                    setShow(true);
                  }}
                >
                  Request to Buy
                </button>
              </td>
              <td>
                <button
                  className="button-blue"
                  onClick={() => {
                    setBuyInfo((prev) => ({ ...prev, planType: "Standard" }));
                    setShow(true);
                  }}
                >
                  Request to Buy
                </button>
              </td>
              <td>
                <button
                  className="button-blue"
                  onClick={() => {
                    setBuyInfo((prev) => ({ ...prev, planType: "Pro" }));
                    setShow(true);
                  }}
                >
                  Request to Buy
                </button>
              </td>
            </tr>
          </tbody>
        </Table> */}
        {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Add Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                type="text"
                className="pricing-input"
                placeholder="Name"
                name="name"
                value={buyInfo.name}
                onChange={handleChange}
              />
              {error.name === "Name" && (
                <p className="error-message m-0">{error.message}</p>
              )}
              <input
                type="text"
                className="pricing-input"
                placeholder="Company Name"
                name="companyName"
                value={buyInfo.companyName}
                onChange={handleChange}
              />
              {error.name === "CompanyName" && (
                <p className="error-message m-0">{error.message}</p>
              )}
              <input
                type="text"
                className="pricing-input"
                placeholder="Mobile Number"
                name="mobileNumber"
                value={buyInfo.mobileNumber}
                onChange={handleChange}
              />
              {error.name === "MobileNumber" && (
                <p className="error-message m-0">{error.message}</p>
              )}
              <input
                type="text"
                className="pricing-input"
                placeholder="Plan Type"
                name="planType"
                value={buyInfo.planType}
                disabled
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="button-other" onClick={handleClose}>
              Close
            </div>
            <div className="button-blue" onClick={handlePlanBuy}>
              Send Request
            </div>
          </Modal.Footer>
        </Modal> */}
      </div>
    </div>
  );
};

export default Pricing;
