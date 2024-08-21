"use client" // TODO Временно, пока есть useState
import { v4 } from "uuid";
import Post from "../../../components/Post";
import { PostItemType } from "../../../constants/post";
import { useState } from "react";
import { IPost, IPostIBodyItem, IPostsShowApiConfigQuery } from "../../../types/post";
import { Grid, Paper } from "@mui/material";
import { postsShowApiConfig } from "../../../api/apiConfigs/posts/show";
import { useCustomQuery } from "../../../api/hooks/useCustomQuery";

interface IPageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params }: IPageProps) => {
  const { data, isLoading, isSuccess } = useCustomQuery<IPostsShowApiConfigQuery, IPost>(
    ['post'],
    postsShowApiConfig(params.slug)
  )

  const [title] = useState<string>('Фейковый заголовок');
  const [body, setbody] = useState<Array<IPostIBodyItem>>([
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

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {/* Main content (Post) */}
      <Grid item xs={12} md={8}>
        <Post
          title={title}
          items={body}
        />
      </Grid>

      {/* Sidebar (Aside) */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ padding: 2 }}>
          {/* Здесь будет контент боковой панели */}
          <h2>Боковая панель</h2>
          <p>Дополнительная информация или ссылки...</p>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Page;