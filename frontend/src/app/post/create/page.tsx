"use client" // TODO Временно, пока есть useState
import { useCallback, useState } from "react";
import { v4 } from 'uuid';
import { IPostItem } from "../../../types/post";
import { PostItemType } from "../../../constants/post";
import { Grid, Paper } from "@mui/material";
import PostForm from "../../../components/PostForm";
import Post from "../../../components/Post";

const Page = () => {
  // TODO Возможно стоит использовать state
  const [postItems, setPostItems] = useState<Array<IPostItem>>([
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

  const addItem = useCallback((newPostItem: IPostItem) => {
    setPostItems(prevPostItems => ([
      ...prevPostItems,
      newPostItem,
    ]))
  }, []);

  const changeValue = useCallback((id: string, value: string) => {
    setPostItems(prevPostItems => prevPostItems.map((prevPostItem) => {
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
            items={postItems}
            changeValue={changeValue}
            addItem={addItem}
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={{ padding: 2 }} >
          <Post
            items={postItems}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Page;