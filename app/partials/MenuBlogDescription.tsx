import React from "react";
import type { BlogInfo } from "~/assets/data";
import {UserInfo} from "~/partials/UserInfo";
import {LikeIcon} from "~/partials/LikeIcon";
import {CommentIcon} from "~/partials/CommentIcon";
import "./menuBlogDescriptionCss.css";

const styles = {
    blogTitle: {
        fontSize: "1.8rem"
    },
    blogLink: {
        color: "#000000",
        textDecoration: "none",
        fontFamily: "'Poppins', sans-serif"
    },
    blogContents: {
        fontSize: "1.3rem"
    },
};

export default class MenuBlogDescription extends React.Component<BlogInfo, {}> {
    render() {
        return (
            <a href={`/${this.props.id}`} style={styles.blogLink}>
                <article className={"blog"}>
                    <UserInfo name={this.props.author.name} avatarUrl={this.props.author.avatar} date={this.props.date} likes={this.props.likes} comments={this.props.comments} />
                    <h1 style={styles.blogTitle}>{this.props.title}</h1>
                    <p style={styles.blogContents}>
                        {this.props.description}
                    </p>
                </article>
            </a>
        );
    }
}