import useHTTP from "~/composables/useHTTP";
import { IPost } from "@/interfaces/post"


export const startSteps = () => {
  return useHTTP<IPost>("https://jsonplaceholder.typicode.com/posts", { method: "GET" });
};