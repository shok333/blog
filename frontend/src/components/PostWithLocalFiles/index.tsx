import { FC, useEffect, useState } from "react";
import { IPostIBodyItem, IPostsItemFiles } from "../../types/post";
import { readFileAsText } from "../../utils/readFileAsText";
import Post from "../Post"

interface IPostWithLocalFilesProps {
  title: string;
  items: Array<IPostIBodyItem>;
  files: IPostsItemFiles;
}

export const PostWithLocalFiles: FC<IPostWithLocalFilesProps> = ({
  title,
  items,
  files,
}) => {
  const [itemsWithFiles, setItemsWithFiles] = useState<Array<IPostIBodyItem>>([]);

  useEffect(() => {
    const getItemsWithFiles = async () => {
      const resoult = await Promise.all(
        items.map(async (item) => {
          const file = files[item.id]

          console.log('file', file)

          if (file) {
            const value = await readFileAsText(file);

            return {
              ...item,
              value
            }
          }

          return item
        })
      );

      setItemsWithFiles(resoult)
    }

    getItemsWithFiles();
  }, [items, files]);

  return (
    <Post
      title={title}
      items={itemsWithFiles}
    />
  )
}