import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  border-width: 1px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  border-color: #616161;
  height: ${RFValue(60)}px;
  padding: ${RFValue(8)}px;
  margin-top: ${RFValue(14)}px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: "#9e9e9e",
})`
  width: 100%;
  color: #eeeeee;
  font-weight: bold;
  margin-left: ${RFValue(6)}px;
`;
