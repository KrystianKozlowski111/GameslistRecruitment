import styled from 'styled-components';
import { Media } from '../../assets/Mixins.style';

export const Wrapper = styled.div`
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 6px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const Title = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 12px;
`;
export const Image = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px 6px 0 0;
  width: 100%;
  overflow: hidden;
  height: 140px;
  object-fit: cover;
`;
export const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;
