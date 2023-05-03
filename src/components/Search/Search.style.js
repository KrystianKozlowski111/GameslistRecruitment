import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  background-color: #121212;
  padding-bottom: 60px;
  box-sizing: border-box;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #272727;
  box-sizing: border-box;
`;
export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  ${Media.md`
  flex-direction:column;
  gap:10px;
  align-items:stretch;
`};
`;
export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 8px 8px 28px;
  font-size: 14px;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  color: #ffff;
  width: auto;
  max-width: 100%;
  background-color: transparent;
  outline: none;
  transition: all 0.2s linear;
  &:focus {
    box-shadow: 0px 0px 1px ##8ec7f5;
    border-color: ##8ec7f5;
  }
`;
export const InputFloat = styled.input`
  padding: 12px 8px;
  font-size: 14px;
  width: 100%;
  border: 1px solid #e2e2e280;
  border-radius: 4px;
  color: #ffff;
  outline: none;
  background-color: transparent;
  transition: all 0.2s linear;
  &:focus {
    box-shadow: 0px 0px 1px ##8ec7f5;
    border-color: ##8ec7f5;
  }
`;
export const InputBoxFloat = styled.div`
  position: relative;
  width: 100%;
`;
export const Label = styled.label`
  display: block;
  top: -10px;
  background-color: #0e0f0f;
  padding: 2px;
  left: 4px;
  position: absolute;
  font-size: 10px;
  font-weight: 400;
  color: #e2e2e2;
`;
export const Img = styled.img`
  max-width: 20px;
  margin-right: 10px;
`;
export const ImgInput = styled.img`
  max-width: 16px;
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%);
`;

export const InputBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;
export const Results = styled.div`
  display: grid;
  max-width: 1480px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  grid-auto-rows: 1fr;
  box-sizing: border-box;
  padding: 0 30px;

  ${Media.lg`
  grid-template-columns: 1fr 1fr 1fr 1fr;
`};
  ${Media.md`
  grid-template-columns: 1fr 1fr 1fr;
`};
  ${Media.xs`
grid-template-columns: 1fr 1fr;
`};
  ${Media.xxs`
grid-template-columns: 100%;
`};
`;
