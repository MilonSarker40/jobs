import dashboard from "../../pages/dashboard";

const MainApp = ({ Component, pageProps }) => {
    const logState = true;
    const renderApp = logState ? <Component {...pageProps} /> : <dashboard />

    return(
        renderApp
    )
}

export default MainApp