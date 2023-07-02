
import { ethers } from 'ethers'
import { ETHER, SAFUU_ARB, PROVIDER } from "../constants"
import SafuuArb from "../ABI/SafuuArb.json"

const useSafuuArb = (signer: any, chainId: number) => {

    const safuuArbInstance = () => {
        const contract = new ethers.Contract(SAFUU_ARB[chainId as keyof typeof SAFUU_ARB], SafuuArb.abi, PROVIDER[chainId as keyof typeof SAFUU_ARB])
        return contract
    }

    const safuuArbWithSigner = (): any => {
        const cttWithSigner = safuuArbInstance().connect(signer)
        return cttWithSigner
    }

    const stake = async (token: string, amount: BigInt) => {
        try {
            if (token === ETHER[chainId as keyof typeof ETHER]) {
                const hash = await stakeEth(token, amount)
                return hash
            } else {
                const hash = await stakeToken(token, amount)
                return hash
            }
        } catch (error: any) {
            console.log(error.message, 'for stake')
        }
    }

    const stakeEth = async (token: string, amount: BigInt) => {
        try {
            const safuuArb = safuuArbWithSigner()
            const tx = await safuuArb.stake(token, amount, { value: amount, gasLimit: 300000 })
            await tx.wait()
            return tx.hash
        } catch (error: any) {
            console.log(error.message, 'for stakeEth')
        }
    }

    const stakeToken = async (token: string, amount: BigInt) => {
        try {
            const safuuArb = safuuArbWithSigner()
            const tx = await safuuArb?.stake(token, amount, { gasLimit: 300000 })
            await tx.wait()
            return tx.hash
        } catch (error: any) {
            console.log(error.message, 'for stakeToken')
        }
    }

    const withdraw = async (token: string, amount: BigInt) => {
        try {
            const safuuArb = safuuArbWithSigner()
            const tx = safuuArb?.withdraw(token, amount, { gasLimit: 300000 })
            await tx.wait()
            return tx.hash
        } catch (error: any) {
            console.log(error.message, 'for withdraw')
        }
    }

    const arbitrage = async (
        router: string,
        token0: string,
        token1: string,
        token2: string,
        amount: BigInt
    ) => {
        try {
            const safuuArb = safuuArbWithSigner()
            const tx = await safuuArb.triangularArbitrage(
                router,
                token0,
                token1,
                token2,
                amount,
                { gasLimit: 500000 })
            await tx.wait()
            return tx.hash
        } catch (error: any) {
            console.log(error.message, 'for arbitrage')
        }
    }

    const balancePerToken = async (token: string) => {
        try {
            const safuuArb = safuuArbWithSigner()
            const res = await safuuArb.getBalancePerToken(token)
            return res
        } catch (error: any) {
            console.log(error.message, 'for balancePerToken')
        }
    }

    const balanceTokenPerUser = async (address: string, token: string) => {
        try {
            const safuuArb = safuuArbWithSigner()
            const res = await safuuArb.getUserBalance(address, token)
            return res
        } catch (error: any) {
            console.log(error.message, 'for balancePerToken')
        }
    }

    return { stake, stakeEth, stakeToken, withdraw, arbitrage, balancePerToken, balanceTokenPerUser }
}

export default useSafuuArb