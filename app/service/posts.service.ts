import { db } from "~/persistence/db";

/**
 * Creates a new post on the database
 * @param formData The form data to create a post
 * @returns Promise resolving to a new post
 */
export const createPost = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const post = {
    title: data.title as string,
    contents: data.contents as string
  }
  return await db.post.create({ data: post })
}

/**
 * Gets all the created posts
 * @returns Promise resolving to an array of posts
 */
export const getAllPosts = async () => {
  return await db.post.findMany();
}

/**
 * Deletes a post given it's id
 * @param formData The form data that includes the post id
 * @returns Promise, rejecting if no id is passed, or resolving to the deleted post if exists
 */
export const deletePost = async (formData: FormData) => {
  const id = formData.get("id");
  
  if(id === null){
    return Promise.reject("id is null.");
  }

  return await db.post.delete({  
    where: {
      id: parseInt(id.toString())
    }
  });
}

/**
 * Gets a single post given it's id
 * @param id The post id
 * @returns Promise resolving to the post if it exists
 */
export const getPostById = async (id: number) => {
  return db.post.findUnique({
    where: {
      id
    }
  });
}