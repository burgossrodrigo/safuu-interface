import { AppWrapper } from "../components"
import General from "../components/General"
import { Header } from "../components/Header"

export const Home = () => {
    return (
        <AppWrapper>
            <Header />
            <General />
        </AppWrapper>
    )
}