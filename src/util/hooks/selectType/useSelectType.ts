import { useDispatch } from 'react-redux';
import {
  setArea,
  setGraduation,
  setGraduationMonth,
  setGraduationYear,
  setRemark,
  setSocialType,
  setType,
} from '../../../modules/redux/action/selectType';
import { useSelectState } from '../default';

const useSelectType = () => {
  const dispatch = useDispatch();
  const state = useSelectState().selectType;
  const setState = {
    setType: (payload: string) => {
      dispatch(setType(payload));
    },
    setSocialType: (payloade: string) => {
      dispatch(setSocialType(payloade));
    },
    setArea: (payload: string) => {
      dispatch(setArea(payload));
    },
    setGraduation: (payload: string) => {
      dispatch(setGraduation(payload));
    },
    setGraduationYear: (payload: number) => {
      dispatch(setGraduationYear(payload));
    },
    setGraduationMonth: (payload: number) => {
      dispatch(setGraduationMonth(payload));
    },
    setRemark: (payload: string) => {
      dispatch(setRemark(payload));
    },
  };
  return {
    state,
    setState,
  };
};

export default useSelectType;
