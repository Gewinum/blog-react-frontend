import type {BlogResponse} from "~/assets/data";
import React from "react";
import {LikeIcon} from "~/partials/LikeIcon";

export type BlogResponsesProps = {
    responses: BlogResponse[];
}

const styles = {
    responses: {
        marginTop: "1rem",
        borderTop: "1px gainsboro ridge",
        fontSize: "1.3rem"
    },
    response: {
        borderTop: "1px gainsboro ridge",
        fontSize: "1.3rem",
        padding: "1rem"
    },
    responseAuthor: {
        fontSize: "1.3rem",
        display: "flex",
        alignItems: "center",
        paddingLeft: "0.5rem"
    },
    responseContents: {
        fontSize: "1.2rem",
        display: "flex",
        alignItems: "center",
        fontFamily: "Serif, sans-serif"
    },
    responseDate: {
        fontSize: "1.2rem",
        color: "gray",
        marginLeft: "2rem",
        fontFamily: "Serif, sans-serif"
    },
    responsesHeader: {
        fontSize: "2.5rem",
        fontFamily: "\"Sans\", sans-serif"
    },
    actionButtonMargin: {
        marginLeft: "2rem",
    },
    blogAvatar: {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        marginRight: "0.7rem"
    }
};

export class BlogResponses extends React.Component<BlogResponsesProps, {}> {
    render() {
        return (
            <div style={styles.responses}>
                <p style={styles.responsesHeader}><strong>Responses</strong></p>
                {this.props.responses.map((response, i) => {
                    return (
                        <div key={"response" + i} style={styles.response}>
                            <div style={styles.responseAuthor}>
                                <img style={styles.blogAvatar} src={response.author.avatar} alt="avatar" />
                                {response.author.name}
                                <div style={styles.responseDate}>{response.date}</div>
                                <LikeIcon likes={response.likes} style={styles.actionButtonMargin} />
                            </div>
                            <div style={styles.responseContents}>
                                <p>{response.contents}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}