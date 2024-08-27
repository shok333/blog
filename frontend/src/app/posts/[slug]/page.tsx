"use client" // TODO Временно, пока есть useState
import Post from "../../../components/Post";
import { IPost, IPostsShowApiConfigQuery } from "../../../types/post";
import { CircularProgress } from "@mui/material";
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
      <Post
        title={data.title}
        items={data.content}
      />
    );
  }
}

export default Page;