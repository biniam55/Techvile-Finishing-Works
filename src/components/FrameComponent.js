import React, { useState, useEffect } from 'react';
import "./FrameComponent.css";

const FrameComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [consultationText, setConsultationText] = useState('');

  useEffect(() => {
    // Simulate typing effect for phone number
    const phoneNumberString = '0956342521';
    let i = 0;
    const phoneNumberInterval = setInterval(() => {
      setPhoneNumber(prevPhoneNumber => {
        const nextChar = phoneNumberString[i];
        i++;
        if (nextChar) {
          return prevPhoneNumber + nextChar;
        } else {
          clearInterval(phoneNumberInterval);
          return prevPhoneNumber;
        }
      });
    }, 100);

    // Simulate typing effect for consultation text
    const consultationString = 'BOOK YOUR FREE CONSULTATION';
    let j = 0;
    const consultationInterval = setInterval(() => {
      setConsultationText(prevText => {
        const nextChar = consultationString[j];
        j++;
        if (nextChar) {
          return prevText + nextChar;
        } else {
          clearInterval(consultationInterval);
          return prevText;
        }
      });
    }, 100);

    return () => {
      clearInterval(phoneNumberInterval);
      clearInterval(consultationInterval);
    };
  }, []);

  return (
    <div className="rectangle-container">
      <div className="frame-child6" />
      <div className="input-processor">
        <div className="output-formatter">
          <img
            className="sequence-controller-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className="iterative-loop">
            <div className="merge-function">{phoneNumber}</div>
          </div>
          <div className="data-comparison-wrapper">
            <img
              className="data-comparison-icon"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="function-call">
            <div className="repeater">
              <img
                className="frame-icon5"
                loading="lazy"
                alt=""
                src="/frame.svg"
              />
              <img
                className="vector-icon2"
                loading="lazy"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="data-filter">
        <div className="data-transformer">
          <h1 className="book-your-free">{consultationText}</h1>
        </div>
        <img
          className="custom-function-icon"
          loading="lazy"
          alt=""
          src="/vector-3.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent;
