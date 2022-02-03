import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-left: 0;
  list-style: none;
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  flex-basis: calc((100% - 20px) / 6);
  height: 122px;
  cursor: pointer;
  margin-bottom: 20px;

  @media (max-width: 772px) {
    flex-basis: calc((100% - 20px) / 3);
  }
`;

export const ItemValue = styled.p`
  margin-bottom: 20px;
  font-weight: normal;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-color-3);
`;

export const ItemTitle = styled.h3`
  margin-top: 5px;
  font-weight: normal;
  font-size: 12px;
  line-height: 1, 16;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--text-color-3);
`;

export const SvgBox = styled.div`
  width: 59px;
  height: 46px;
  position: relative;
  background-color: ${props =>
    props.idx === props.aidx ? 'var(--accent-color-2)' : 'var(--bg-color)'};
  border-radius: 20px;
  &:active {
    background-color: var(--accent-color-2);
    border-radius: 20px;
    margin-bottom: 7px;
  }
`;

export const Svg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 50%;
  transition: transform scale(0.9);
  transform: translateX(-50%);
  fill: ${props =>
    props.aidx === props.idx ? 'var(--acent-color)' : 'var(--color-icon)'};
  &:hover {
    position: absolute;
    bottom: 0;
    left: 50%;
    scale: 1.1;
    transform: translateX(-50%);
    transition: transform scale(1);
    fill: var(--acent-color);
  }
`;
