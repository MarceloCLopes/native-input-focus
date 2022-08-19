import * as S from './styles';
import { ReactElement } from 'react';

interface PropsInput {
  icon: ReactElement
  placeholder: string
  secureTextEntry?: boolean
  inputRef?: any
  onSubmitEditing?: () => void
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send'
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'number-pad' | 'decimal-pad'
}

export function Input({
  icon,
  placeholder,
  secureTextEntry,
  inputRef,
  onSubmitEditing,
  returnKeyType,
  keyboardType
}: PropsInput) {
  return (
    <S.Container>
      {icon && icon}
      <S.TextInput
        ref={inputRef}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        keyboardType={keyboardType}
        autoCorrect={false}
        autoCapitalize='none'
      />
    </S.Container>
  );
}