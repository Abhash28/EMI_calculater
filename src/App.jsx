import React, { useState, useEffect } from "react";

const app = () => {
  const [principal, setPrincipal] = useState("");
  const [interest, setInterest] = useState("");
  const [tenure, setTenure] = useState("");

  const [emi, setEmi] = useState("");
  const [totalInterest, setTotalInterest] = useState("");
  const [totalPayment, setTotalPayment] = useState("");

  useEffect(() => {
    if (!principal || !interest || !tenure) {
      setEmi("");
      setTotalInterest("");
      setTotalPayment("");
      return;
    }

    const p = parseFloat(principal);
    const r = parseFloat(interest);
    const n = parseInt(tenure, 10);

    if (p <= 0 || r <= 0 || n <= 0) {
      setEmi("");
      setTotalInterest("");
      setTotalPayment("");
      return;
    }

    const monthlyInterest = r / 100 / 12;

    const calculatedEmi =
      (p * monthlyInterest * Math.pow(1 + monthlyInterest, n)) /
      (Math.pow(1 + monthlyInterest, n) - 1);

    const emiFixed = calculatedEmi.toFixed(2);
    const totalAmount = (calculatedEmi * n).toFixed(2);
    const totalInt = (totalAmount - p).toFixed(2);

    setEmi(emiFixed);
    setTotalInterest(totalInt);
    setTotalPayment(totalAmount);
  }, [principal, interest, tenure]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #06B1CF, #38d39f)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "15px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#B64B39",
            marginBottom: "20px",
            fontSize: "28px",
          }}
        >
          EMI Calculator
        </h2>

        <label
          style={{
            display: "block",
            marginTop: "15px",
            fontSize: "16px",
            color: "#333",
          }}
        >
          Loan Amount
        </label>
        <input
          type="number"
          placeholder="Enter Principal Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 15px",
            marginTop: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            outline: "none",
            transition: "0.2s",
          }}
        />

        <label
          style={{
            display: "block",
            marginTop: "15px",
            fontSize: "16px",
            color: "#333",
          }}
        >
          Rate of Interest (%)
        </label>
        <input
          type="number"
          placeholder="Annual Interest Rate"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 15px",
            marginTop: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            outline: "none",
            transition: "0.2s",
          }}
        />

        <label
          style={{
            display: "block",
            marginTop: "15px",
            fontSize: "16px",
            color: "#333",
          }}
        >
          Tenure (in months)
        </label>
        <input
          type="number"
          placeholder="Loan Tenure"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 15px",
            marginTop: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
            outline: "none",
            transition: "0.2s",
          }}
        />

        <div
          style={{
            marginTop: "25px",
            backgroundColor: "#f8f8f8",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              marginBottom: "10px",
              color: "#27ae60",
              fontWeight: "bold",
            }}
          >
            {emi ? `Monthly EMI: ₹${emi}` : ""}
          </h3>
          <h3 style={{ marginBottom: "10px", color: "#c0392b" }}>
            {totalInterest ? `Total Interest: ₹${totalInterest}` : ""}
          </h3>
          <h3 style={{ color: "#2980b9" }}>
            {totalPayment ? `Total Payment: ₹${totalPayment}` : ""}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default app;
