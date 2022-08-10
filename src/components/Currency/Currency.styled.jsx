import styled from 'styled-components';

export const Info = styled.div`
  width: 100%;
  height: 100%;
  background-color: #4a56e2;
  filter: opacity(0.8);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  color: white;

  & > * {
    &:nth-child(2n) {
      margin-top: 20px;
      text-align: center;
    }
  }
`;

export const InfoText = styled.h4``;
export const InfoButton = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;

  margin-top: 5px;

  outline: none;
  border-radius: 50%;
  background-color: transparent;
  opacity: 0.7;

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: rotate(360deg) scale(1.1);
    transition: transform 0.7s ease 0s, opacity 0.3s ease 0s;

    opacity: 1;
  }

  @media (min-width: 1280px) {
    margin-top: 40px;
  }
`;

export const TableContainer = styled.div`
  margin-top: 10px; // not according to layout

  width: 280px;
  height: 174px;

  @media (max-width: 767px) {
    height: 65vh;
  }

  @media (min-width: 768px) {
    width: 336px;
    height: 182px;
  }
  @media (min-width: 1280px) {
    width: 393px;
    height: 347px;
  }
`;

export const Table = styled.table`
  border-radius: 30px;
  color: white;
`;

export const TableHead = styled.thead`
  width: 280px;
  height: 50px;

  display: block;

  border-radius: 30px 30px 0px 0px;

  padding: 11px 17px 12px 20px;

  background-color: #4a56e2;
  filter: opacity(0.8);

  @media (min-width: 768px) {
    width: 336px;
  }
  @media (min-width: 1280px) {
    width: 393px;
    height: 60px;

    padding-top: 17px;
    padding-bottom: 16px;
  }
`;

export const HeadRow = styled.tr`
  display: flex;
  justify-content: space-between;

  @media (min-width: 1280px) {
    padding-left: 27px; //layout 44px
    padding-right: 44px;
  }
`;

export const HeadItem = styled.th`
  display: inline-block;

  &:first-child {
    margin-right: 10px;
  }

  &:nth-child(2n) {
    margin-right: 40px;
  }

  color: var(--white-color);
  opacity: 1;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
`;

export const TableBody = styled.tbody`
  display: flex;
  flex-direction: column;

  padding: 12px 20px 16px;
  border-radius: 0px 0px 30px 30px;

  text-align: center;

  color: #ffffff;

  background-color: var(--blue-color);
  background-image: url('data:image/png;base64,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');

  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;

  @media (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    background-position: 30% 100%;
    padding: 20px 61px 147px 58px;
  }
`;
export const BodyRow = styled.tr`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const BodyItem = styled.td`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
