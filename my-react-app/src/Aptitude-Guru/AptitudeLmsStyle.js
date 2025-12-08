// src/aptitude-lms/aptitude-lms-style.js
import styled from "styled-components";

export const AptitudeLmsStyle = styled.div`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background-color: #fafafa;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 40px 16px;

  .page-wrapper {
    width: 100%;
    max-width: 950px;
  }

  .title-block {
    text-align: center;
    margin-bottom: 24px;
  }

  .welcome-text {
    font-size: 20px;
    color: #0073ff;
    margin: 0;
  }

  .main-title {
    margin: 4px 0 0 0;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .title-black {
    color: #222;
  }

  .title-red {
    color: #ff2657;
  }

  .form-card {
    background: #ffffff;
    border-radius: 10px;
    padding: 28px 32px 32px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.06);
    border: 1px solid #f0f0f0;
  }

  form {
    width: 100%;
  }

  .two-column-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px 24px;
    margin-bottom: 18px;
  }

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;
  }

  label {
    color: #555;
  }

  input,
  select {
    border-radius: 6px;
    border: 1px solid #ddd;
    padding: 10px 12px;
    font-size: 14px;
    outline: none;
    transition: border 0.2s, box-shadow 0.2s;
  }

  input:focus,
  select:focus {
    border-color: #ff2657;
    box-shadow: 0 0 0 2px rgba(255, 38, 87, 0.12);
  }

  .mobile-wrapper {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .country-select {
    max-width: 90px;
  }

  .mobile-input {
    flex: 1;
  }

  .label-with-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .show-btn {
    border: none;
    background: transparent;
    padding: 0;
    font-size: 13px;
    cursor: pointer;
    color: #555;
  }

  .show-btn:hover {
    text-decoration: underline;
  }

  .password-rules {
    font-size: 13px;
    color: #555;
    margin: 10px 0 16px;
  }

  .password-rules ul {
    list-style: disc;
    padding-left: 18px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 4px;
  }

  .submit-row {
    display: flex;
    justify-content: flex-start;
  }

  .submit-btn {
    border: none;
    border-radius: 6px;
    padding: 10px 26px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    background-color: #ff2657;
    color: #ffffff;
  }

  .submit-btn:hover {
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    .two-column-row {
      grid-template-columns: 1fr;
    }

    .form-card {
      padding: 20px 18px 24px;
    }

    .password-rules ul {
      grid-template-columns: 1fr;
    }

    .main-title {
      font-size: 26px;
    }
  }
`;