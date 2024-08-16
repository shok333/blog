import { FC } from "react";
import { IPostIBodytem } from "../../types/post";
import { useForm } from "react-hook-form";
import PostAddItemButtons from "../PostAddItemButtons";
import { Alert, Box, Collapse, Stack } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import PostFormField from "../PostFormField";

interface IPostFormProps {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  items: Array<IPostIBodytem>;
  changeValue(id: string, value: string): void;
  addItem(newPostItem: IPostIBodytem): void;
  onSubmit(): void;
}

const PostForm: FC<IPostFormProps> = ({
  isPending,
  isSuccess,
  isError,
  items,
  changeValue,
  addItem,
  onSubmit,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit((data, e: any) => {
        e.preventDefault();
        onSubmit();
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
        <Collapse in={isSuccess}>
          <Alert severity="success">
            Сохранилось
          </Alert>
        </Collapse>
        <Collapse in={isError}>
          <Alert severity="error">
            Не сохранилось
          </Alert>
        </Collapse>
        <LoadingButton
          type="submit"
          variant="outlined"
          loading={isPending}
        >
          Сохранить
        </LoadingButton>
      </Stack>
    </Box>
  )
}

export default PostForm;