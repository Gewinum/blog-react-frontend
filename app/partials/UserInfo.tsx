import React from "react";

type UserInfoProps = {
    name: string;
    avatarUrl: string;
};

const styles = {
    author: {
        fontSize: "1.5rem",
        display: "flex",
        alignItems: "center"
    },
    blogAvatar: {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        marginRight: "0.7rem"
    }
};

export class UserInfo extends React.Component<UserInfoProps, {}> {
    render() {
        return (
            <p style={styles.author}>
                <img style={styles.blogAvatar} src={this.props.avatarUrl} alt="avatar" /> {this.props.name}
            </p>
        );
    }
}