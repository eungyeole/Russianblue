import React, { FC, useState } from 'react';
import * as S from './style';
import {
  ChooseType,
  ChooseRegion,
  ChooseGraduation,
  ChooseGraduationDate,
  ChooseRemark,
} from './column';

interface Props {
  socialType: string;
  graduation_month: number;
  graduation_year: number;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: string) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
}

const SelectLine: FC<Props> = ({
  socialType,
  graduation_month,
  graduation_year,
  setType,
  setSocialType,
  setArea,
  setGraduation,
  setGraduationMonth,
  setGraduationYear,
  setRemark,
}) => {
  const [isToBe, setIsToBe] = useState(false);
  return (
    <S.SelectLine>
      <ChooseType socialType={socialType} setType={setType} setSocialType={setSocialType} />
      <ChooseRegion setArea={setArea} />
      <ChooseGraduation setGraduation={setGraduation} setIsToBe={setIsToBe} />
      <ChooseGraduationDate
        graduation_month={graduation_month}
        graduation_year={graduation_year}
        setGraduationMonth={setGraduationMonth}
        setGraduationYear={setGraduationYear}
        isToBe={isToBe}
      />
      <ChooseRemark setRemark={setRemark} />
    </S.SelectLine>
  );
};

export default SelectLine;
