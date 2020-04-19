import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Content = styled.View`
  margin: 80px 36px 0;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  height: 136px;
  width: 136px;
  border-radius: 68px;
`;

export const Small = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const Text = styled.Text`
  color: #444;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 15px;
`;

export const LogoutButton = styled(Button)`
  color: #fff;
  background: #e74040;
`;
