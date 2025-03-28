import React from "react";
import type { BlogInfo } from "~/assets/data";
import {LikeIcon} from "~/partials/LikeIcon";
import {CommentIcon} from "~/partials/CommentIcon";
import {BlogIntroInfo} from "~/partials/BlogIntroInfo";
import {UserInfo} from "~/partials/UserInfo";
import {BlogResponses} from "~/partials/BlogResponses";

const styles = {
    body: {
        fontFamily: "'Poppins', sans-serif"
    },
    blogHeader: {
        fontSize: "3rem",
        fontFamily: "\"Roboto Light\", sans-serif"
    },
    contents: {
        marginTop: "2rem",
        fontSize: "1.3rem",
        fontFamily: "Serif, sans-serif",
        padding: "0.5rem"
    },
};

export default class Blog extends React.Component<BlogInfo, {}> {
    render() {
        return (
            <div style={styles.body}>
                <h1 style={styles.blogHeader}>{this.props.title}</h1>
                <UserInfo name={this.props.author.name} avatarUrl={this.props.author.avatar} />
                <BlogIntroInfo date={this.props.date} likes={this.props.likes} comments={this.props.comments} />
                <div style={styles.contents} dangerouslySetInnerHTML={{ __html: this.props.contents }} />
                <BlogResponses responses={this.props.responses} />
            </div>
        );
    }
}