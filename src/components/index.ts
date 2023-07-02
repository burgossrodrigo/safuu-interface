import { styled } from "styled-components";

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15vw;
    width: max-content;
    margin: auto auto;
    margin-top: 2vh;
    align-items: center;
`

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: auto auto;
`

export const RowWrapper = styled.div<{ gap: any, width: any }>`
position: relative;
  display: flex;
  flex-direction: row;
  margin: auto auto;
  width: ${(props: any) => props.width};
  gap: ${(props: any) => props.gap};
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const HorizontalDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 80vw;
    margin: 2vh auto;
    opacity: 0.9;
`