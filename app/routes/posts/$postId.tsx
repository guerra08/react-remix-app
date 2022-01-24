import type { Post } from "@prisma/client"
import { LoaderFunction, useLoaderData } from "remix"
import { getPostById } from "~/service/posts.service";

type LoaderData = Post;

export const loader: LoaderFunction = async ({ params }) => {
  const postId = params.postId;
  if(!postId) throw new Error("Missing postId.");
  const post = await getPostById(parseInt(postId));
  if(!post) throw new Error("Post not found!");
  return post;
} 

export default function Post(){

  const post = useLoaderData<LoaderData>();

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-3xl font-bold">
        {post.title}
      </h1>
      <p className="text-base">
        {post.contents}
      </p>
    </div>
  )
}