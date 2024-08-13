import { FC } from "react";
import { IPostItem } from "../../types/post";
import PostItem from "../PostItem";
import { Stack } from "@mui/material";

interface IPostProps {
  items: Array<IPostItem>;
}

const Post: FC<IPostProps> = ({
  items,
}) => {
  return (
    <Stack spacing={2}>
      {
        items.map(({ type, value, id }) => (
          <PostItem
            key={id}
            type={type}
            value={value}
          />
        ))
      }
    </Stack>
  )
}

export default Post;