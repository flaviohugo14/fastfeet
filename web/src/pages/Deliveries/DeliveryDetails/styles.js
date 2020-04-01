import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  width: 100% !important;

  strong {
    font-size: 14px;
    color: #444;
    margin-bottom: 4px;
  }

  small + strong {
    margin-top: 12px;
    width: 100%;
    padding-top: 12px;
    border-top: 1px solid #eee;
  }

  small {
    font-size: 16px;
    color: #666;
    line-height: 26px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    height: 100px;
    width: 100% !important;
    border: 1px dashed #eee;
    border-radius: 8px;
  }
`;
