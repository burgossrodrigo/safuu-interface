import { ethers } from "ethers";
import safuuGoToken from '../ABI/ERC20.json';
import { IError } from '../interface'
import { formatDecimalsTo } from "../methods/utils";

const usesafuuGo = (provider: any, address: string, signer: any) => {

  const stakingInstance = () => {
    const staking = new ethers.Contract(address, safuuGoToken.abi, signer ?? provider);
    console.log(signer, 'signer')
    return staking;
  }

  const sendStakingInstance = () => {
    const signer = provider.getSigner(); // Replace 'provider' with your appropriate provider instance
    const staking = new ethers.Contract(address, safuuGoToken.abi, signer);
    return staking;
  };

  const getAllowance = async (owner: string | any, spender: string): Promise<number | IError> => {
    try {
      const staking = stakingInstance();
      const allowance = await staking.allowance(owner, spender);
      return allowance;
    } catch (error: IError | any) {
      return error;
    }
  };

  const approve = async (spender: string, amount: number): Promise<string | IError | any> => {
    try {
      const staking = sendStakingInstance()
      const decimalsAdjustments = formatDecimalsTo(amount)
      const parsedAmount = BigInt(decimalsAdjustments)
      const tx = await staking.approve(spender, parsedAmount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
        console.log(error.message, 'for approve')
      return error;
    }
  };

  const balanceOf = async (account: string | any): Promise<number | IError> => {
    try {
      const staking = stakingInstance();
      console.log(account, 'account')
      const balance = await staking.balanceOf(account);
      const balanceAdjustment = Number(balance) / (10 ** 18)
      return balanceAdjustment;
    } catch (error: IError | any) {
      console.log(error.message, 'for balanceOf')
      return error;
    }
  };

  const decreaseAllowance = async (spender: string, subtractedValue: number): Promise<boolean | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.decreaseAllowance(spender, subtractedValue);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const increaseAllowance = async (spender: string | any, addedValue: number): Promise<boolean | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.increaseAllowance(spender, addedValue);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const name = async (): Promise<string | IError> => {
    try {
      const staking = stakingInstance();
      const name = await staking.name();
      return name;
    } catch (error: IError | any) {
      return error;
    }
  };

  const symbol = async (): Promise<string | IError> => {
    try {
      const staking = stakingInstance();
      const symbol = await staking.symbol();
      return symbol;
    } catch (error: IError | any) {
      return error;
    }
  };

  const totalSupply = async (): Promise<number | IError> => {
    try {
      const staking = stakingInstance();
      const totalSupply = await staking.totalSupply();
      return totalSupply;
    } catch (error: IError | any) {
      return error;
    }
  };

  const transfer = async (to: string, amount: number): Promise<boolean | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.transfer(to, amount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  const transferFrom = async (from: string, to: string, amount: number): Promise<boolean | IError> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.transferFrom(from, to, amount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: IError | any) {
      return error;
    }
  };

  return {
    getAllowance,
    approve,
    balanceOf,
    decreaseAllowance,
    increaseAllowance,
    name,
    symbol,
    totalSupply,
    transfer,
    transferFrom,
  };
};

export default usesafuuGo;
