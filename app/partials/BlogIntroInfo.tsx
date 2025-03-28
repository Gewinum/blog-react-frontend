import React from "react";
import {LikeIcon} from "~/partials/LikeIcon";
import {CommentIcon} from "~/partials/CommentIcon";

type BlogIntroInfoProps = {
    date: string;
    likes: number;
    comments: number;
}

const styles = {
    actionButtonMargin: {
        marginLeft: "2rem",
    },
    smallInfo: {
        fontSize: "1.5rem",
        display: "flex",
        alignItems: "center",
        borderTop: "1px gainsboro ridge",
        borderBottom: "1px gainsboro ridge",
        paddingTop: "0.8rem",
        paddingBottom: "0.8rem"
    },
};

export class BlogIntroInfo extends React.Component<BlogIntroInfoProps, {}> {
    render() {
        return (
            <div style={styles.smallInfo}>
                {this.props.date}
                <LikeIcon likes={this.props.likes} style={styles.actionButtonMargin} />
                <CommentIcon comments={this.props.comments} style={styles.actionButtonMargin} />
            </div>
        );
    }
}