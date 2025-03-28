import type { Route } from "./+types/home";
import {Header} from "~/partials/Header";
import {BlogDb} from "~/assets/data";
import MenuBlogDescription from "~/partials/MenuBlogDescription";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home page" },
    { name: "description", content: "Cassualo home page" },
  ];
}

export default function Home() {
    return (
        <div>
            <Header />
            {BlogDb.map(blog => (
                <MenuBlogDescription key={blog.id} {...blog} />
            ))}
        </div>
    );
}