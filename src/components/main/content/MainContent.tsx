import React, { FC } from 'react';
import * as S from '../style';
import MainButton from './MainButton';
interface Props {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  buttonText: string;
  isButtonAble: boolean;
  isHaveTerm: boolean;
}

const MainContent: FC<Props> = ({ title, buttonText, description, isButtonAble, isHaveTerm }) => {
  return (
    <S.MainContentWrapper>
      <S.MainSubTitle>대덕소프트웨어마이스터고등학교</S.MainSubTitle>
      <S.MainTitle>2022년 신입생 모집</S.MainTitle>
      <S.MainDescription className='mainDescription'>{title}</S.MainDescription>
      <S.MainDescription className='subDescription'>{description}</S.MainDescription>
      <MainButton>{buttonText}</MainButton>
    </S.MainContentWrapper>
  );
};

export default MainContent;
