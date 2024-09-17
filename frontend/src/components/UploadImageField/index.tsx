import React, { FC, useEffect, useState } from 'react';
import { Button, Avatar } from '@mui/material';
import { getNewFileName } from '../../utils/getNewFileName';
import { readFileAsDataURL } from '../../utils/readFileAsDataURL';

interface IUploadImageFieldProps {
  name: string
  file?: File
  changeValue(value: string, id?: string): void;
  addPostsItemFile(name: string, file: File): void
}

export const UploadImageField: FC<IUploadImageFieldProps> = ({
  name,
  file,
  changeValue,
  addPostsItemFile
}) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const getItemsWithFiles = async () => {
      if (file) {
        const result = await readFileAsDataURL(file)

        setImage(result);
      }
    }

    getItemsWithFiles();
  }, [file])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const value = getNewFileName(name, file)

      addPostsItemFile(name, file)
      changeValue(value, name)
    }
  }

  return (
    <div>
      {image && <Avatar src={image} alt="uploaded image" sx={{ width: 100, height: 100 }} />}
      <label htmlFor={`upload-image-button-${name}`}>
        <input
          accept="image/*"
          id={`upload-image-button-${name}`}
          type="file"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <Button variant="contained" component="span">
          Загрузить изображение
        </Button>
      </label>
    </div>
  );
};