import { AppWrapper, RowWrapper } from "../components"
import General from "../components/General"
import { Header } from "../components/Header"

export const Home = () => {
    return (
        <AppWrapper>
            <Header />
            <RowWrapper gap={'2vw'} width={'80vw'}>
                <General />
                <General />
            </RowWrapper>
        </AppWrapper>
    )
}