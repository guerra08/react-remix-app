import { ActionFunction, Form, redirect } from "remix";
import { createPost } from "~/service/posts.service";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  await createPost(formData);
  return redirect("/posts");
}

export default function New() {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <Form className="mb-0 space-y-6" method="post">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <div className="mt-1">
              <input id="title" name="title" type="text" required className="" />
            </div>
          </div>

          <div>
            <label htmlFor="contents" className="block text-sm font-medium text-gray-700">Contents</label>
            <div className="mt-1">
              <textarea id="contents" name="contents" required className="" />
            </div>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create</button>
          </div>
        </Form>
      </div>
    </div>
  )
}