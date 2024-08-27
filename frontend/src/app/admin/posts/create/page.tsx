"use client"
import { useCallback, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { IPost, IPostIBodyItem } from "../../../../types/post";
import { postsAddApiConfig } from "../../../../api/apiConfigs/posts/add";
import PostForm from "../../../../components/PostForm";
import Post from "../../../../components/Post";

const PostCreate = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setbody] = useState<Array<IPostIBodyItem>>([]);

  const mutation = useMutation<IPost, Error, any>({}); //TODO Убрать any

  const onSubmit = useCallback(() => {
    mutation.mutate(postsAddApiConfig({
      title,
      body,
      author: 'dmitriy_gerasimov' //TODO Потом задать автора правильно
    }));
  }, [mutation, title, body]);

  const addItem = useCallback((newPostItem: IPostIBodyItem) => {
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
      spacing={1}
    >
      <Grid
        item
        xs={6}
      >
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
      <Grid
        item
        xs={6}
      >
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