import { Card, CardContent, styled } from "@mui/material"
import { HorizontalDiv } from "."

const StyledCard = styled(Card)`
margin: 10vh auto;
width: 90vw;

`

const General = () => {
    return (
        <HorizontalDiv>
            <StyledCard>
                <CardContent>
                    Aqui
                </CardContent>
                <CardContent>
                    Aqui
                </CardContent>
                <CardContent>
                    Aqui
                </CardContent>
            </StyledCard>
        </HorizontalDiv>
    )
}

export default General