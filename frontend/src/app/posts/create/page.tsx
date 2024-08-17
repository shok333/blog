"use client" // TODO Временно, пока есть useState
import { useCallback, useState } from "react";
import { IPost, IPostIBodytem } from "../../../types/post";
import { Grid, Paper } from "@mui/material";
import PostForm from "../../../components/PostForm";
import Post from "../../../components/Post";
import { useMutation } from "@tanstack/react-query";
import { postsAddApiConfig } from "../../../apiConfigs/posts/add";

const PostCreate = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setbody] = useState<Array<IPostIBodytem>>([]);

  const mutation = useMutation<IPost, Error, any>({}); //TODO Убрать any

  const onSubmit = useCallback(() => {
    mutation.mutate(postsAddApiConfig({
      title,
      body,
    }));
  }, [mutation, title, body]);

  const addItem = useCallback((newPostItem: IPostIBodytem) => {
    setbody(prevbody => ([
      ...prevbody,
      newPostItem,
    ]))
  }, []);

  const changeValue = useCallback((value: string, id?: string) => {
    setbody(prevbody => prevbody.map((prevPostItem) => {
      if (prevPostItem.id === id) {
        return {
          ...prevPostItem,
          value,
        }
      }

      return prevPostItem;
    }))
  }, []);

  return (
    <Grid
      container
      spacing={2}
      sx={{ padding: 2 }}
    >
      <Grid item xs={6}>
        <Paper sx={{ padding: 2 }} >
          <PostForm
            title={title}
            body={body}
            setTitle={setTitle}
            changeValue={changeValue}
            addItem={addItem}
            onSubmit={onSubmit}
            isPending={mutation.isPending}
            isSuccess={mutation.isSuccess}
            isError={mutation.isError}
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={{ padding: 2 }} >
          <Post
            title={title}
            items={body}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default PostCreate;