import React from "react";
import {LikeIcon} from "~/partials/LikeIcon";
import {CommentIcon} from "~/partials/CommentIcon";

type UserInfoProps = {
    name: string;
    avatarUrl: string;
    date?: string;
    likes?: number;
    comments?: number;
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
    },
    responseDate: {
        fontSize: "1.2rem",
        color: "gray",
        marginLeft: "2rem",
        fontFamily: "Serif, sans-serif"
    }
};

export class UserInfo extends React.Component<UserInfoProps, {}> {
    render() {
        return (
            <div style={styles.author}>
                <img style={styles.blogAvatar} src={this.props.avatarUrl} alt="avatar" /> {this.props.name}
                {(this.props.date !== undefined) && (
                    <div style={styles.responseDate}>{this.props.date}</div>
                )}
                {(this.props.likes !== undefined && this.props.likes !== null) && (
                    <LikeIcon likes={this.props.likes} />
                )}
                {(this.props.comments !== undefined && this.props.comments !== null) && (
                    <CommentIcon comments={this.props.comments} />
                )}
            </div>
        );
    }
}