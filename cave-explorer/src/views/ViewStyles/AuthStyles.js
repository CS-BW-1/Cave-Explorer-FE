import styled from "styled-components";
export const AuthContainer = styled.div`
  border-radius: 5px;
  width: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -9em; /*set to a negative number 1/2 of your height*/
  margin-left: -150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: #eb4960;
  justify-content: center;

  h1 {
    font-size: 24px;
    text-align: center;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
  span {
    margin: 10px 0;
    text-align: center;
    a {
      color: #999;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    margin: auto;
    width: 100%;
    height: 220px;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/rip.svg) bottom center;
    background-size: 150%;

    input {
      width: 200px;
      height: 30px;
      margin: 10px 0;
      font-size: 14px;
      border: 1px solid #999;
      border-radius: 5px;
      padding: 0 10px;
      background-color: black;
      color: #fff;
    }

    input[type="submit"] {
      background: #2d758c;
      color: #fff;
      border-radius: 3px;
      padding: 0 10px;
      text-transform: uppercase;
      font-weight: bold;
      border: none;
      cursor: pointer;

      &:disabled {
        background: #ccc;
      }
    }
  }
`;
