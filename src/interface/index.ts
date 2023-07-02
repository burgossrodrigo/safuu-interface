export interface IError {
    message: string
}

export interface IStaker {
    balance: any
    depositTime: any
    cumulativeReward: any
}

export interface IStakeData {
    rewards: any
    totalStaked: any
    stakers: any
}

export interface ITokenData {
    allowance: any,
    balance: any
}

// rewards, totalStaked, stakers