import { ethers } from "ethers"

export const SAFUU_ARB = {
    11155111: '0x1c0355d52373757B7E795c31B7A5afFC67D98645',
    56: '0xe70501a84C316250D241b9eD6B071Ba1AEa604D7'
}

export const ETHER = {
    96: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
}

export const PROVIDER = {
    11155111: new ethers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/L54zAOu4OqTo3k4ZIFvSI83n11TzBTfR'),
    56: new ethers.JsonRpcProvider('https://special-quick-ensemble.bsc.discover.quiknode.pro/f2e003ef278279449cb2339e79106407d67924f3/')
}

export const WSS_PROVIDER = {
    11155111: new ethers.WebSocketProvider('wss://eth-sepolia.g.alchemy.com/v2/L54zAOu4OqTo3k4ZIFvSI83n11TzBTfR'),
    56: new ethers.WebSocketProvider('wss://special-quick-ensemble.bsc.discover.quiknode.pro/f2e003ef278279449cb2339e79106407d67924f3/')
}

export const SAFUUGO_ADDRESS = '0x9321Bc6185AdC9b9cb503cC211E17cB311C3Fa95'