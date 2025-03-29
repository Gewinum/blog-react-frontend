import React from "react";

export type LikeButtonProps = {
    likes: number;
}

const styles = {
    button: {
        width: "1.5rem",
        height: "1.5rem",
    },
    actionButton: {
        marginLeft: "2rem",
        display: "flex",
        alignItems: "center",
    }
};

export class LikeIcon extends React.Component<LikeButtonProps, {}> {
    render() {
        return (
            <div style={styles.actionButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styles.button} fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                {this.props.likes}
            </div>
        );
    }
}