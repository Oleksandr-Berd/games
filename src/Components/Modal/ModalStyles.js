import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
  position: absolute;

  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  padding-bottom: 10px;

  color: white;
  font-weight: bold;
  background-color: black;
  text-align: center;
`;
export const Image = styled.img`
  width: auto;
  height: 700px;

  border: solid 1px #fff;
`;
