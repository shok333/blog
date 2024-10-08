import { FC, memo, useCallback } from "react";
import { v4 } from 'uuid';
import { Button, ButtonGroup } from "@mui/material";
import { PostItemType } from "../../constants/post";
import { IPostIBodyItem } from "../../types/post";

interface IPostAddItemButtonsProps {
  addItem(newPostItem: IPostIBodyItem): void;
}

const PostAddItemButtons: FC<IPostAddItemButtonsProps> = memo(({
  addItem,
}) => {
  const onClick = useCallback((type: PostItemType) => () => {
    const id = v4();

    addItem({
      type,
      value: '',
      id,
    });
  }, [addItem]);

  return (
    <ButtonGroup
      variant="outlined"
    >
      {
        Object.values(PostItemType)
          .filter((type) => type !== PostItemType.H1)
          .map((type) => (
            <Button
              key={type}
              onClick={onClick(type)}
            >
              {type}
            </Button>
          ))
      }
    </ButtonGroup>
  );
})

PostAddItemButtons.displayName = 'PostAddItemButtons';

export default PostAddItemButtons;