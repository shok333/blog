import { ChangeEventHandler, FC, useCallback } from "react";
import { TextField } from "@mui/material";
import { PostItemType } from "../../constants/post";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { UploadImageField } from "../UploadImageField";

interface IPostFormFieldProps {
  type: PostItemType;
  id: string;
  value: string;
  error?: string;
  errors: FieldErrors<FieldValues>;
  file?: File;
  register: UseFormRegister<FieldValues>
  changeValue(value: string, id?: string): void;
  addPostsItemFile(name: string, file: File): void
}

const PostFormField: FC<IPostFormFieldProps> = ({
  type,
  id,
  value,
  errors,
  file,
  register,
  changeValue,
  addPostsItemFile,
}) => {
  const helperText = String(errors[id]?.message || '');
  const error = Boolean(helperText);

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (e) => {
      changeValue(e.target.value, id)
    },
    [id, changeValue]
  );

  switch (type) {
    case PostItemType.H1:
      return (
        <TextField
          label={PostItemType.H1}
          fullWidth
          {...register(id, { required: 'Ошибочка' })}
          value={value}
          helperText={helperText}
          error={error}
          onChange={onChange}
        />
      );

    case PostItemType.H2:
      return (
        <TextField
          label={PostItemType.H2}
          fullWidth
          {...register(id, { required: 'Ошибочка' })}
          value={value}
          helperText={helperText}
          error={error}
          onChange={onChange}
        />
      );

    case PostItemType.IMG:
      return (
        <UploadImageField
          name={id}
          file={file}
          changeValue={changeValue}
          addPostsItemFile={addPostsItemFile} />
      );

    default:
      return (
        <TextField
          label={PostItemType.P}
          fullWidth
          multiline
          rows={4}
          {...register(id, { required: 'Ошибочка' })}
          value={value}
          helperText={helperText}
          error={error}
          onChange={onChange}
          inputProps={{ style: { resize: "vertical" } }}
        />
      );
  }
}

export default PostFormField;