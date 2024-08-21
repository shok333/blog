import { Dispatch, FC, SetStateAction } from "react";
import { IPostIBodyItem } from "../../types/post";
import { useForm } from "react-hook-form";
import PostAddItemButtons from "../PostAddItemButtons";
import { Alert, Box, Collapse, Stack } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import PostFormField from "../PostFormField";
import { PostItemType } from "../../constants/post";

interface IPostFormProps {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  title: string;
  body: Array<IPostIBodyItem>;
  setTitle: Dispatch<SetStateAction<string>>
  changeValue(value: string, id?: string): void;
  addItem(newPostItem: IPostIBodyItem): void;
  onSubmit(): void;
}

const PostForm: FC<IPostFormProps> = ({
  isPending,
  isSuccess,
  isError,
  title,
  body,
  setTitle,
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
        <PostFormField
          id="title"
          type={PostItemType.H1}
          value={title}
          register={register}
          changeValue={setTitle}
          errors={errors}
        />
        {
          body.map(({ type, value, id }) => (
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