import {type RouteConfig, index, route} from "@react-router/dev/routes";
import {Route} from "react-router";

export default [index("routes/home.tsx"), route(":id", "routes/blog.tsx")] satisfies RouteConfig;
