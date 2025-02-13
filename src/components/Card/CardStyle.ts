import styled from 'styled-components';

export const StyledCard = styled.div<{ bgColor: string; textColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  margin: 10px;
  text-align: center;

  h2 {
    font-size: 50px;
    font-weight: 600;
    color: ${(props) => props.textColor};
  }

  p {
    font-size: 40px;
    font-weight: 600;
    color: ${(props) => props.textColor};
  }
`;