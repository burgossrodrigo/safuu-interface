import { Typography } from "@mui/material"
import { RowWrapper, StyledHeader } from "."
import { Profile } from "./Profile"

export const Header = () => {
    return (
        <StyledHeader>
            <img src={"https://app.safuugo.com/_next/image?url=%2Fimages%2Flogo%2Flogoa1.png&w=256&q=75"} height={50} />
            <RowWrapper gap={'2vw'} width={'max-content'} >
                <div><Typography variant="h5" color="primary">General</Typography></div>
                <div><Typography variant="h5" color="primary">General</Typography></div>
                <div><Typography variant="h5" color="primary">General</Typography></div>
            </RowWrapper>
            <Profile />
        </StyledHeader>
    )
}