import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  padding: ${RFValue(16)}px;
  background-color: #191720;
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight()}px;
`;

export const ButtonView = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: #eeeeee;
  font-weight: bold;
  font-size: ${RFValue(30)}px;
  margin-top: ${RFValue(20)}px;
`;

export const SubTitle = styled.Text`
  color: #eeeeee;
  font-weight: 200;
  font-size: ${RFValue(35)}px;
  margin-top: ${RFValue(10)}px;
`;

export const Content = styled.View`
  width: 100%;
  align-items: center;
  margin-bottom: ${RFValue(20)}px;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${RFValue(20)}px;
`;

export const TextFooter = styled.Text`
  color: #eeeeee;
  font-weight: bold;
`;

export const ButtonFooter = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  border-radius: 14px;
  justify-content: center;
  height: ${RFValue(55)}px;
  background-color: #eeeeee;
  margin-top: ${RFValue(20)}px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
`;
