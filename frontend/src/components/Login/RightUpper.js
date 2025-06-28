import React from 'react';
import Arrow from "../assets/arrow1.png"
const RightUpper = () => {
  return (
    <div
      style={{
        width: '500px',
        border: '2px solid black',
        margin: '200px auto 0 auto',
        padding: '20px',
        borderRadius: '8px',
      }}
    >
      {/* Heading */}
      <h4
        style={{
          fontFamily: "'Itim', cursive",
          fontSize: '24px',
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        Hey, Looking to Buy and Sell products!
      </h4>

      {/* Form */}
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Email Input */}

<div style={{ position: 'relative', width: '400px', marginBottom: '15px' }}>
  <input
    type="email"
    placeholder="Enter your Email"
    style={{
      width: '100%',
      padding: '10px 40px 10px 15px', // Extra right padding for the image
      border: '1px solid black',
      borderRadius: '6px',
    }}
  />
  <img
    src={Arrow}
    alt="arrow"
    style={{
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '30px',
      height: '30px',
      cursor: 'pointer',
    }}
  />
</div>


        {/* OTP Input */}
        <input
          type="text"
          placeholder="Enter OTP"
          style={{
            width: '400px',
            padding: '10px 40px 10px 15px',
            border: '1px solid black',
            borderRadius: '6px',
            marginBottom: '20px',
          }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '200px',
            padding: '10px',
            border: '1px solid black',
            backgroundColor: '#2563eb',
            color: '#fff',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginBottom: '15px',
          }}
        >
          Create Account
        </button>

        {/* Sign In Text */}
        <p style={{ fontSize: '14px', textAlign: 'center' }}>
          <strong>Not on XYZ yet?</strong>{' '}
          <a
            href="/signin"
            style={{ color: '#2563eb', textDecoration: 'none', fontWeight: '500' }}
          >
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default RightUpper;

