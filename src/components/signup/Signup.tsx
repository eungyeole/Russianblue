import React, { FC } from 'react';
import { isSignUpDataAble } from '../../util/util';
import SignUpForm from './form';
import SignUpRule from './rule';
import * as S from './style';

interface Props {
  name: string;
  phoneNumber: string;
  phoneCode: string;
  password: string;
  ruleCheck: boolean;
  setPassword: (payload: string) => void;
  setPhoneCode: (payload: string) => void;
  setName: (payload: string) => void;
  setPhoneNumber: (payload: string) => void;
  setRuleCheck: (payload: boolean) => void;
}

const SignUp: FC<Props> = props => {
  const { name, phoneNumber, phoneCode, password } = props;
  return (
    <S.SignUp>
      <div>
        <S.SignUpHeaderWrapper>
          <S.SignUpSubTitle>대덕소프트웨어마이스터고등학교</S.SignUpSubTitle>
          <S.SignUpTitle>2022년 지원자 회원가입</S.SignUpTitle>
        </S.SignUpHeaderWrapper>
        <SignUpRule setRuleCheck={props.setRuleCheck} ruleCheck={props.ruleCheck} />
        <SignUpForm {...props} />
        <S.SignUpSubmitButtonWrapper>
          <S.SignUpSubmitButton disable={isSignUpDataAble(name, phoneNumber, phoneCode, password)}>
            계정 생성
            <div />
          </S.SignUpSubmitButton>
        </S.SignUpSubmitButtonWrapper>
      </div>
    </S.SignUp>
  );
};

export default SignUp;
