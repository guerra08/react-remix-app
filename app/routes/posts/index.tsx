import { ActionFunction, Form, Link, LoaderFunction, redirect, useLoaderData } from "remix";
import { deletePost, getAllPosts } from "~/service/posts.service";

type LoaderData = Awaited<ReturnType<typeof loader>>

export const loader = async () => {
  return await getAllPosts();
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  if(formData.get("_action") === "delete"){
    await deletePost(formData);
    return redirect("/posts");
  }
}

export default function Index() {

  const posts = useLoaderData<LoaderData>();

  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-3xl font-bold">
        Posts
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className="flex flex-row">
              <Link to={'/posts/' + post.id}>
                <p className="font-bold">{post.title}&nbsp;</p>
              </Link>
              <Form method="post">
                <input type="hidden" name="id" value={post.id} />
                <button type="submit" name="_action" value="delete" className="border border-transparent rounded-md shadow-sm text-white bg-red-500 hover:bg-red-700">
                  delete
                </button>
              </Form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}