import type {Route} from "../../.react-router/types/app/routes/+types/home";
import {useParams} from "react-router";
import {Header} from "~/partials/Header";
import {BlogDb} from "~/assets/data";
import Blog from "~/partials/Blog";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "A blog" },
        { name: "description", content: "You're currently reading a blog" },
    ];
}

export default function BlogPage() {
    const { id } = useParams<{ id: string }>();
    const blog = BlogDb.find((blog: { id: string | undefined; }) => blog.id === id);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <>
            <Header />
            <Blog {...blog} />
        </>
    );
}