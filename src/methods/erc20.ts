import { ethers } from "ethers";
import { formatDecimalsTo } from "./utils";
import ERC20 from '../ABI/ERC20.json'

export const useErc20 = (provider: any, address: string, signer: any) => {

  const stakingInstance = () => {
    const staking = new ethers.Contract(address, ERC20.abi, signer ?? provider);
    console.log(signer, 'signer')
    return staking;
  }

  const sendStakingInstance = () => {
    const signer = provider.getSigner(); // Replace 'provider' with your appropriate provider instance
    const staking = new ethers.Contract(address, ERC20.abi, signer);
    return staking;
  };

  const getAllowance = async (owner: string | any, spender: string): Promise<number | any> => {
    try {
      const staking = stakingInstance();
      const allowance = await staking.allowance(owner, spender);
      return allowance;
    } catch (error: any) {
      return error;
    }
  };

  const approve = async (spender: string, amount: number): Promise<string | any> => {
    try {
      const staking = sendStakingInstance()
      const decimalsAdjustments = formatDecimalsTo(amount)
      const parsedAmount = BigInt(decimalsAdjustments)
      const tx = await staking.approve(spender, parsedAmount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: any) {
        console.log(error.message, 'for approve')
      return error;
    }
  };

  const balanceOf = async (account: string | any): Promise<number> => {
    try {
      const staking = stakingInstance();
      console.log(account, 'account')
      const balance = await staking.balanceOf(account);
      const balanceAdjustment = Number(balance) / (10 ** 18)
      return balanceAdjustment;
    } catch (error: any) {
      console.log(error.message, 'for balanceOf')
      return error;
    }
  };

  const decreaseAllowance = async (spender: string, subtractedValue: number): Promise<string | any> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.decreaseAllowance(spender, subtractedValue);
      const res = await tx.wait();
      return res.hash;
    } catch (error: any) {
      return error;
    }
  };

  const increaseAllowance = async (spender: string | any, addedValue: number): Promise<string | any> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.increaseAllowance(spender, addedValue);
      const res = await tx.wait();
      return res.hash;
    } catch (error: any) {
      return error;
    }
  };

  const name = async (): Promise<string | any> => {
    try {
      const staking = stakingInstance();
      const name = await staking.name();
      return name;
    } catch (error: any) {
      return error;
    }
  };

  const symbol = async (): Promise<string | any> => {
    try {
      const staking = stakingInstance();
      const symbol = await staking.symbol();
      return symbol;
    } catch (error: any) {
      return error;
    }
  };

  const totalSupply = async (): Promise<number | any> => {
    try {
      const staking = stakingInstance();
      const totalSupply = await staking.totalSupply();
      return totalSupply;
    } catch (error:any) {
      return error;
    }
  };

  const transfer = async (to: string, amount: number): Promise<string | any> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.transfer(to, amount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: any) {
      return error;
    }
  };

  const transferFrom = async (from: string, to: string, amount: number): Promise<string | any> => {
    try {
      const staking = stakingInstance();
      const tx = await staking.transferFrom(from, to, amount);
      const res = await tx.wait();
      return res.hash;
    } catch (error: any) {
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

export default useErc20;