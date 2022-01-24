import { Prisma } from "@prisma/client";
import { db } from "~/persistence/db";

export const createPost = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const post = {
    title: data.title as string,
    contents: data.contents as string
  }
  return await db.post.create({ data: post })
}

export const getAllPosts = async () => {
  return await db.post.findMany();
}

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

export const getPostById = async (id: number) => {
  return db.post.findUnique({
    where: {
      id
    }
  });
}