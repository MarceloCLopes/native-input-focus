import * as S from './styles';
import React, { useRef } from 'react';
import { Input } from '../../components/Input';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

export function Home() {
  const passwordRef = useRef<any>()

  return (
    <S.Container>
      <S.Header>
        <S.ButtonView >
          <AntDesign name="back" size={24} color="#eeeeee" />
        </S.ButtonView>

        <S.Title>Entrar em minha conta.</S.Title>
        <S.SubTitle>Que bom ter você de volta aqui!</S.SubTitle>
      </S.Header>

      <S.Content>
        <Input
          placeholder={'Email'}
          returnKeyType='next'
          keyboardType={'email-address'}
          onSubmitEditing={() => passwordRef.current.focus()}
          icon={<AntDesign name="user" size={16} color="#616161" />}
        />

        <Input
          inputRef={passwordRef}
          placeholder={'Senha'}
          returnKeyType='done'
          secureTextEntry
          icon={<MaterialIcons name="lock" size={16} color="#616161" />}
        />
      </S.Content>

      <S.Footer>
        <S.TextFooter>Ainda não tem conta? Registrar</S.TextFooter>

        <S.ButtonFooter>
          <S.TextButton>Entrar</S.TextButton>
        </S.ButtonFooter>
      </S.Footer>
    </S.Container>
  );
}