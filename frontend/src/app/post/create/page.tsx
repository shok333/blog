"use client" // TODO Временно, пока есть useState
import { useCallback, useState } from "react";
import { v4 } from 'uuid';
import { IPost, IPostIBodytem } from "../../../types/post";
import { PostItemType } from "../../../constants/post";
import { Grid, Paper } from "@mui/material";
import PostForm from "../../../components/PostForm";
import Post from "../../../components/Post";
import { useMutation } from "@tanstack/react-query";
import { postAddApi } from "../../../api/post/add";

const Page = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setbody] = useState<Array<IPostIBodytem>>([
    {
      type: PostItemType.H2,
      value: 'Это Mock заголовок 1',
      id: v4(),
    },
    {
      type: PostItemType.P,
      value: 'Это Mock параграф 1 lorem',
      id: v4(),
    },
    {
      type: PostItemType.H2,
      value: 'Это Mock заголовок 2',
      id: v4(),
    },
    {
      type: PostItemType.P,
      value: 'Это Mock параграф 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id purus metus. Aenean euismod magna eget mauris consequat, at volutpat metus sollicitudin.',
      id: v4(),
    }
  ]);

  const mutation = useMutation<IPost, Error, IPost>({
    mutationFn: postAddApi
  });

  const onSubmit = useCallback(() => {
    mutation.mutate({
      title,
      body,
    });
  }, [mutation, title, body]);

  const addItem = useCallback((newPostItem: IPostIBodytem) => {
    setbody(prevbody => ([
      ...prevbody,
      newPostItem,
    ]))
  }, []);

  const changeValue = useCallback((id: string, value: string) => {
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
            items={body}
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
            items={body}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Page;