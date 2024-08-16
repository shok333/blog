import { FC } from "react";
import { PostItemType } from "../../constants/post";
import { Typography } from "@mui/material";

interface IPostIBodytemProps {
  type: PostItemType;
  value: string;
}

const PostItem: FC<IPostIBodytemProps> = ({
  type,
  value,
}) => {
  switch (type) {
    case PostItemType.H1:
      return (
        <Typography
          variant={PostItemType.H1}
          component={PostItemType.H1}
        >
          {value}
        </Typography>
      );

    case PostItemType.H2:
      return (
        <Typography
          variant={PostItemType.H2}
          component={PostItemType.H2}
        >
          {value}
        </Typography>
      );

    default:
      return (
        <Typography
          component={PostItemType.P}
        >
          {value}
        </Typography>
      );
  }
}

export default PostItem;