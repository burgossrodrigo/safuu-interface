import { ethers } from "ethers";
import SafuuArb from '../ABI/SafuuArb.json'

export const useSafuuarb = (provider: any, address: string) => {

    const stakingInstance = () => {
        const staking = new ethers.Contract(address, SafuuArb.abi, provider);
        return staking;
    };

    const signerStakingInstance = () => {
        const signer = provider.getSigner(); // Replace 'provider' with your appropriate provider instance
        const staking = new ethers.Contract(address, SafuuArb.abi, signer);
        return staking;
    };

    const collectRewards = async (token: string) => {
        try {
            const staking = signerStakingInstance();
            const tx = await staking.collectRewards(token);
            const res = await tx.wait();
            return res.hash;
        } catch (error) {
            return error;
        }
    };

    const getBalancePerToken = async (token: string) => {
        try {
            const staking = stakingInstance();
            const balance = await staking.getBalancePerToken(token);
            return balance;
        } catch (error) {
            return error;
        }
    };

    const getStakerCount = async () => {
        try {
            const staking = stakingInstance();
            const stakersCount = await staking.getStakerCount();
            return stakersCount;
        } catch (error) {
            return error;
        }
    };

    const getUserBalance = async (user: string, token: string) => {
        try {
            const staking = stakingInstance();
            const userBalance = await staking.getUserBalance(user, token);
            return userBalance;
        } catch (error) {
            return error;
        }
    };

    const getUserReward = async (user: string, token: string) => {
        try {
            const staking = stakingInstance();
            const userReward = await staking.getUserReward(user, token);
            return userReward;
        } catch (error) {
            return error;
        }
    };

    // const setProjectWallet = async (newWallet: string) => {
    //     try {
    //         const staking = signerStakingInstance();
    //         const tx = await staking.setProjectWallet(newWallet);
    //         const res = await tx.wait();
    //         return res.hash;
    //     } catch (error) {
    //         return error;
    //     }
    // };

    // const setTax = async (tax: BigInt) => {
    //     try {
    //         const staking = signerStakingInstance();
    //         const tx = await staking.setTax(tax);
    //         const res = await tx.wait();
    //         return res.hash;
    //     } catch (error) {
    //         return error;
    //     }
    // };

    const stake = async (token: string, amount: BigInt) => {
        try {
            const staking = signerStakingInstance();
            const tx = await staking.stake(token, amount, { value: amount });
            const res = await tx.wait();
            return res.hash;
        } catch (error) {
            return error;
        }
    };

    // const tax = async () => {
    //     try {
    //         const staking = stakingInstance();
    //         const taxValue = await staking.tax();
    //         return taxValue;
    //     } catch (error) {
    //         return error;
    //     }
    // };

    const totalStaked = async () => {
        try {
            const staking = stakingInstance();
            const totalStakedValue = await staking.totalStaked();
            return totalStakedValue;
        } catch (error) {
            return error;
        }
    };

    // const transferOwnership = async (newOwner: string) => {
    //     try {
    //         const staking = signerStakingInstance();
    //         const tx = await staking.transferOwnership(newOwner);
    //         const res = await tx.wait();
    //         return res.hash;
    //     } catch (error) {
    //         return error;
    //     }
    // };


    const withdraw = async (token: string, amount: BigInt) => {
        try {
            const staking = signerStakingInstance();
            const tx = await staking.withdraw(token, amount);
            const res = await tx.wait();
            return res.hash;
        } catch (error) {
            return error;
        }
    };

    return {
        collectRewards,
        getBalancePerToken,
        getStakerCount,
        getUserBalance,
        getUserReward,
        totalStaked,
        withdraw,
        stake
    }

}