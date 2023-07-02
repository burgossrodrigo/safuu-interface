import { Button, Card, CardActions, CardContent, CardMedia, Chip, styled } from "@mui/material"
import { HorizontalDiv } from "."

import BNBIcon from '../assets/bnb-banner.png'
import { useContext, useState } from "react"
import { AppContext } from "../state"
import useSafuuArb from "../contracts/SafuuArb"
import { ETHER, PROVIDER, SAFUUGO_ADDRESS, SAFUU_ARB } from "../constants"
import { useAccount, useNetwork } from "wagmi"
import usesafuuGo from "../contracts/SafuuGo"
import BigNumberInput from "./BigNumberInput"
import PercentageButtons from "./PercentageButtons"

const StyledCard = styled(Card)`
margin: 10vh auto;
width: 35vw;
`

const General = () => {

    const [deposit, setDeposit] = useState<string | number>(0);
    const [ loading, setIsLoading ] = useState<Boolean>(false)
    const [hash, setHash ] = useState<string | undefined>()

    const { state } = useContext(AppContext);
    const { tokenData } = state;
    const { balance, allowance } = tokenData;

    const { isConnected } = useAccount()

    const safuuArb = useSafuuArb(window?.ethereum, Number(window?.ethereum?._network?.chainId), PROVIDER[56])
    const safuuGo = usesafuuGo(window?.ethereum, SAFUUGO_ADDRESS, PROVIDER[56])

    const { approve } = safuuGo
    const { stake } = safuuArb

    const isAmountGreaterThanAllowance = Number(deposit) >= Number(allowance) / 10 ** 18;
    const isAmountSmallerThanAllowance = Number(deposit) < Number(allowance) / 10 ** 18;

    const handleDepositChange = (newDeposit: number) => {
        setDeposit(newDeposit);
    };

    const handleInoutDepositChange = (newDeposit: number) => {
        setDeposit(newDeposit.toString());
    };

    const handleApproveClick = async () => {
        setIsLoading(true);
        try {
            const hash = await approve(SAFUU_ARB[Number(window?.ethereum?._network?.chainId) as keyof typeof SAFUU_ARB], Number(deposit))
            setHash(hash)
            console.log(hash, 'hash')
        } catch (error: any) {
            console.log(error.message, 'for approve');
        } finally {
            setIsLoading(false);
          }
    }

    const handleDepositClick = async () => {
        setIsLoading(true);
        try {
            const hash = await stake(ETHER[56], BigInt(deposit))
            setHash(hash)
        } catch (error: any) {
            console.log(error.message, 'for approve');
        } finally {
            setIsLoading(false);
          }
    }

    return (
        <HorizontalDiv>
            <StyledCard>
                <CardMedia 
                    component="img"
                    height="200"
                    image={BNBIcon}
                    alt="Paella dish"
                />
                <CardContent>
                    <Chip size='medium' label={`Total balance: ${Number(balance).toFixed(2)}`} />
                </CardContent>
                <CardContent>
                    <PercentageButtons balance={balance} onDepositChange={handleDepositChange} />
                </CardContent>
                <CardContent>
                    <BigNumberInput balance={balance} onDepositChange={handleInoutDepositChange} />
                </CardContent>
                <CardContent> 
                <Chip size='medium' label={`Total rewards: ${Number(balance).toFixed(2)}`} />
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleApproveClick}
                        size="large"
                        disabled={isAmountSmallerThanAllowance}
                    >
                        Approve
                    </Button>
                    <Button
                        onClick={handleDepositClick}
                        variant="contained"
                        size='large'
                        color="secondary"
                        disabled={isAmountGreaterThanAllowance}
                    >
                        Stake
                    </Button>
                </CardActions>
            </StyledCard>
        </HorizontalDiv>
    )
}

export default General