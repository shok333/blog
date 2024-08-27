"use client"
import { PostsList } from "../../components/PostsList";
import { useCustomQuery } from "../../api/hooks/useCustomQuery";
import { postsApiConfig } from "../../api/apiConfigs/posts";
import { CircularProgress, Paper } from "@mui/material";
import { IPaginationQuery } from "../../types/pagination";
import { IPaginatedPosts } from "../../types/post";

const Posts = () => {
  const { data, isLoading, isSuccess } = useCustomQuery<IPaginationQuery, IPaginatedPosts>(
    ['posts'],
    postsApiConfig({
      page: 1,
      limit: 15
    })
  )

  if (isLoading && !isSuccess) {
    return (
      <CircularProgress />
    )
  }

  if (isSuccess) {
    return (
      <Paper>
        <PostsList
          items={data.data}
        />
      </Paper>
    )
  }
}

export default Posts;