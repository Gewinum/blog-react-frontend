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
    blogAuthor: {
        fontSize: "1rem",
        display: "flex",
        alignItems: "center"
    },
    blogAvatar: {
        width: "1.5rem",
        height: "1.5rem",
        borderRadius: "50%",
        marginRight: "0.7rem"
    },
    blogFooter: {
        fontSize: "1rem",
        display: "flex",
        alignItems: "center"
    },
};

export default class MenuBlogDescription extends React.Component<BlogInfo, {}> {
    render() {
        return (
            <a href={`/${this.props.id}`} style={styles.blogLink}>
                <article className={"blog"}>
                    <UserInfo name={this.props.author.name} avatarUrl={this.props.author.avatar} />
                    <h1 style={styles.blogTitle}>{this.props.title}</h1>
                    <p style={styles.blogContents}>
                        {this.props.description}
                    </p>
                    <div style={styles.blogFooter}>
                        {this.props.date}
                        <LikeIcon likes={this.props.likes}/>
                        <CommentIcon comments={this.props.comments} />
                    </div>
                </article>
            </a>
        );
    }
}