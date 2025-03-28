import React from "react";

export type LikeButtonProps = {
    comments: number;
    style?: React.CSSProperties;
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

export class CommentIcon extends React.Component<LikeButtonProps, {}> {
    render() {
        return (
            <div style={styles.actionButton}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styles.button} fill="currentColor">
                    <path d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5v10A2.5 2.5 0 0 0 5.5 19H7v3l4.5-3H18.5A2.5 2.5 0 0 0 21 16.5v-10z" />
                </svg>
                {this.props.comments}
            </div>
        );
    }
}