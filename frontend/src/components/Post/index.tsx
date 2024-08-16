import { FC } from "react";
import { IPostIBodytem } from "../../types/post";
import PostItem from "../PostItem";
import { Stack } from "@mui/material";

interface IPostProps {
  items: Array<IPostIBodytem>;
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