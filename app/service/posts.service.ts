import { Prisma } from "@prisma/client";
import { db } from "~/persistence/db";

export const createPost = async (formData: FormData) => {
  const { title, contents } = Object.fromEntries(formData);
  const data: Prisma.PostCreateInput = {
    title: title as string,
    contents: contents as string

  };
  return await db.post.create({ data })
}

export const getAllPosts = async () => {
  return await db.post.findMany();
}