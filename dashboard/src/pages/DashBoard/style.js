import styled from "styled-components";

export const Content = styled.div`
  background-image: url("https://cdn.pixabay.com/photo/2017/05/20/00/34/sunset-2327964_960_720.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns: 0.5fr 2fr;
  grid-gap: 20px;
  @media screen and (max-width: 768px) {
    display: block;
  }
  .card-profile {
    background: #d3adad;
    opacity: 0.7;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;

    @media screen and (max-width: 768px) {
      height: auto;
    }
    h3 {
      color: white;
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      opacity: 1;
      z-index: 99;
    }

    button {
      margin-top: 20px;
      background: red;
      color: white;
      border-radius: 10px;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      :hover {
        opacity: 0.7;
      }
    }
  }
`;

export const Info = styled.div`
  align-self: center;
  display: flex;
  @media screen and (max-width: 992px) {
    display: block;
  }
  .info {
    width: 50%;
  }
  p {
    color: black;
    padding: 15px;
    font-weight: bold
  }
  span {
    color: black;
  }
`;
