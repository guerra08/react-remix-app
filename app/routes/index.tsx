import { Link } from "remix";

export default function Index() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <h1 className="text-3xl font-bold">
        Remix study application
      </h1>
      <Link to="/posts" className="mt-2">
        <p className="font-semibold">Check created posts</p>
      </Link>
      <Link to="/posts/new" className="mt-2">
        <p className="font-semibold">Create a new post</p>
      </Link>
    </div>
  );
}
