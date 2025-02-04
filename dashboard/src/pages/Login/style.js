import styled from "styled-components";

export const FormSignIn = styled.div`
  background-image: url("https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg");
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 10;
  width: 100%;
  height: 100vh;
  h1 {
    color: white;
    margin: 0;
  }
  .form-content {
    padding: 20px;
    color: white;
    p {
      font-size: 15px;
      @media screen and (max-width: 768px) {
        font-size: 10px;
        padding: 0;
      }
    }
    input {
      border: 1px solid transparent;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 40px;
      height: 50px;
      color: white;
      border-radius: 40px;
      padding-left: 20px;
      padding-right: 20px;
      margin: 15px;
      transition: all 0.5s;
      width: 100%;
      :hover {
        border: 1px solid white;
      }
      :focus {
        outline: none;
      }
      ::placeholder {
        color: #d7d3d3;
      }
    }
    .button-content {
      background: #787792;
      padding: 0 20px;
      width: 100%;
      height: 42px;
      border-radius: 21px;
      font-size: 18px;
      color: #fff;
      border: none;
      opacity: 1;
      cursor: pointer;
      margin-top: 20px;
      :hover {
        opacity: 0.5;
      }
    }
  }
`;

export const Content = styled.div`
  width: 30%;
  height: 50%;
  margin: 0 auto;
  text-align: center;
`;
