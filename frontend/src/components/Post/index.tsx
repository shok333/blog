import { FC } from "react";
import { IPostIBodyItem } from "../../types/post";
import PostItem from "../PostItem";
import { Stack } from "@mui/material";
import { PostItemType } from "../../constants/post";

interface IPostProps {
  title: string;
  items: Array<IPostIBodyItem>;
}

const Post: FC<IPostProps> = ({
  title,
  items,
}) => {
  return (
    <Stack spacing={2}>
      <PostItem
        type={PostItemType.H1}
        value={title}
      />
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