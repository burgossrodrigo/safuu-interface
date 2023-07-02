import { IStakeData, ITokenData } from '../interface';

export const setStakeData = (dispatch: any, payload: IStakeData | any): void => {
  dispatch({ type: 'SET_STAKE_DATA', payload: payload });
}

export const setTokenData = (dispatch: any, payload: ITokenData | any): void => {
    dispatch({ type: 'SET_TOKEN_DATA', payload: payload });
  }

  export const setBlocknumber = (dispatch: any, payload: number | any): void => {
    dispatch({ type: 'SET_BLOCKNUMBER', payload: payload });
  }

  export const setTheme = (dispatch: any, payload: string | any): void => {
    dispatch({ type: 'SET_THEME', payload: payload });
  }

