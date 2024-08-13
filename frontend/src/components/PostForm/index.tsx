import { FC } from "react";
import { IPostItem } from "../../types/post";
import { useForm } from "react-hook-form";
import PostAddItemButtons from "../PostAddItemButtons";
import { Box, Button, Stack } from "@mui/material";
import PostFormField from "../PostFormField";

interface IPostFormProps {
  items: Array<IPostItem>;
  changeValue(id: string, value: string): void;
  addItem(newPostItem: IPostItem): void;
}

const PostForm: FC<IPostFormProps> = ({
  items,
  changeValue,
  addItem,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((data, e: any) => {
        e.preventDefault();
        console.log(data);
      })}
    >
      <Stack spacing={2}>
        {
          items.map(({ type, value, id }) => (
            <PostFormField
              key={id}
              id={id}
              type={type}
              value={value}
              register={register}
              changeValue={changeValue}
              errors={errors}
            />
          ))
        }
        <PostAddItemButtons
          addItem={addItem}
        />
        <Button
          type="submit"
        >
          Сохранить
        </Button>
      </Stack>
    </Box>
  )
}

export default PostForm;