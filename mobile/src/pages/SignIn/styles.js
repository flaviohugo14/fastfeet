import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  background: #7d40e7;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IdInput = styled.TextInput`
  height: 45px;
  background: #fff;
  align-self: stretch;
  margin: 37px 25px 0;
  border-radius: 4px;
  border: 1px solid #ddd;
  padding: 10px 20px;
  font-size: 16px;
  color: #333;
`;

export const SignInButton = styled(Button)`
  margin: 16px 25px 0;
  align-self: stretch;
`;
