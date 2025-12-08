import styled from "styled-components";

export const PropsPractice2Style = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  .parent {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 30px;
  }

  .child {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 1.5rem;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    width: 230px;
    height: 200px;
    transition: all 0.3s ease;
  }

  .child:hover {
    transform: translateY(-5px);
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.3);
  }

  .icon {
    font-size: 40px;
    color: gray;
    margin-bottom: 10px;
  }

  .numbers {
    font-size: 40px;
    font-weight: 700;
    color: gray;
  }

  .details {
    font-size: 20px;
    color: gray;
    font-weight: 500;
  }
`;
