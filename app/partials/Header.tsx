import React from "react";

const styles = {
    logo: {
        width: "160px"
    },
    header: {
        paddingTop: "25px",
        paddingBottom: "25px",
        paddingLeft: "50px",
        marginBottom: "3rem",
        width: "auto",
        background: "aliceblue"
    }
};

export class Header extends React.Component {
    render() {
        return (
            <header style={styles.header}>
                <a href="/">
                    <img src="./assets/logo.png" alt="logo" style={styles.logo}/>
                </a>
            </header>
        );
    }
}