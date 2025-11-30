import React, { useState, useEffect, useRef } from 'react';

export const OTPGenerator = () => {
  const [otp, setOtp] = useState(null);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);
  const OTP_EXPIRY = 5; // seconds
  const ARIA_LIVE_VALUE = "polite";

  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(newOtp);
    setTimer(OTP_EXPIRY);
  }
  useEffect(() => {
    if (timer === 0) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [timer]);
  return (
    <div className="container">
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">
        {otp ? otp : "Click 'Generate OTP' to get a code"}
      </h2>
      <p id="otp-timer" aria-live={ARIA_LIVE_VALUE}>
        {timer > 0
          ? `Expires in: ${timer} seconds`
          : otp
          ? "OTP expired. Click the button to generate a new OTP."
          : ""}
      </p>
      <button
        id="generate-otp-button"
        onClick={generateOTP}
        disabled={timer > 0}
      >
        Generate OTP
      </button>
    </div>
  );
}