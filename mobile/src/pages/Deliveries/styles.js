import styled from 'styled-components/native';
import Filter from '~/components/Filter';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
  padding-top: 25px;
`;

export const Top = styled.View`
  padding: 0 25px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Div = styled.View`
  flex-direction: column;
  margin-left: 16px;
`;

export const Avatar = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 45px;
`;

export const Header = styled.View`
  padding: 0 25px;
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  color: #444;
  font-weight: bold;
  font-size: 24px;
  max-width: 175px;
`;

export const Welcome = styled.Text`
  color: #666;
  font-size: 16px;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
`;

export const DeliveredFilter = styled(Filter)`
  margin-left: 15px;
`;

export const PendingFilter = styled(Filter)``;

export const Logout = styled.TouchableOpacity``;

export const DeliveryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 14px;
  padding: 3px 0;
`;
