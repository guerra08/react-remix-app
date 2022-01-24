import { LoaderFunction, useLoaderData } from "remix";
import { getAllPosts } from "~/service/posts.service";

export const loader: LoaderFunction = async () => {
  return await getAllPosts();
}

export default function Index() {

  const posts = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Posts
      </h1>
      {posts.map((post: any) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}