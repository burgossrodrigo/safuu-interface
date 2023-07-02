import { createContext, useReducer } from 'react'
import { IStakeData, ITokenData } from '../interface'

export const initialState = {
  stakeData: { rewards: 0, totalStaked: 0, stakers: 0 },
  tokenData: { allowance: 0, balance: 0 },
  blockNumber: 0,
  theme: 'light'
}
type AppState = typeof initialState

type ACTIONTYPE =
  | { type: "SET_STAKE_DATA"; payload: IStakeData[] | any }
  | { type: "SET_TOKEN_DATA"; payload: ITokenData[] | any }
  | { type: "SET_BLOCKNUMBER"; payload: number | any }
  | { type: "SET_THEME"; payload: string | any }




function reducer(state: AppState, action: ACTIONTYPE) {
  switch (action.type) {
    case "SET_STAKE_DATA":
      return { ...state, stakeData: action.payload }
    case "SET_TOKEN_DATA":
      return { ...state, tokenData: action.payload }
    case "SET_BLOCKNUMBER":
      return { ...state, blockNumber: action.payload }
    case "SET_THEME":
      return { ...state, theme: action.payload }
    default:
      return state
  }
}

const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<ACTIONTYPE>;
}>({ state: initialState, dispatch: () => { } })

export function AppProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext }