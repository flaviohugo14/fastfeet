import styled from 'styled-components/native';

export const Container = styled.View`
  height: 74px;
  background: #fff;
  border-radius: 4px;
  margin: 20px 22px 0;
  padding: 20px;

  box-shadow: 0 0 3px #0000001a;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  overflow: hidden;
  max-width: 200px;

  font-size: 18px;
  color: #999;
`;

export const Date = styled.Text`
  color: #c1c1c1;
  font-size: 14px;
`;
