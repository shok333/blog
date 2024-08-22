"use client" // TODO Временно, пока есть useState
import { v4 } from "uuid";
import Post from "../../../components/Post";
import { IPost, IPostsShowApiConfigQuery } from "../../../types/post";
import { CircularProgress, Grid, Paper } from "@mui/material";
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

  if (isLoading && !isSuccess) {
    return (
      <CircularProgress />
    )
  }

  if (isSuccess) {
    return (
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {/* Main content (Post) */}
        <Grid item xs={12} md={8}>
          <Post
            title={data.title}
            items={[]}
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
}

export default Page;