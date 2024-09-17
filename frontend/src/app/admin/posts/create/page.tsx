"use client"
import { useCallback, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { IPost, IPostIBodyItem, IPostsItemFiles } from "../../../../types/post";
import { postsAddApiConfig } from "../../../../api/apiConfigs/posts/add";
import PostForm from "../../../../components/PostForm";
import { PostWithLocalFiles } from "../../../../components/PostWithLocalFiles";

const PostCreate = () => {
  const [title, setTitle] = useState<string>('');
  const [postBody, setPostBody] = useState<Array<IPostIBodyItem>>([]);
  const [files, setFiles] = useState<IPostsItemFiles>({});

  const mutation = useMutation<IPost, Error, any>({}); //TODO Убрать any

  const addPostsItemFile = useCallback((name: string, file: File) => {
    setFiles((prevFiles: IPostsItemFiles) => ({
      ...prevFiles,
      [name]: file
    }))
  }, [])

  const onSubmit = useCallback(() => {
    const body = new FormData()

    body.append('title', title)
    body.append('postBody', JSON.stringify(postBody))
    body.append('author', 'dmitriy_gerasimov') //TODO Потом задать автора правильно

    Object.entries(files).forEach(([name, file]) => {
      body.append(name, file)
    })

    mutation.mutate(postsAddApiConfig(body));
  }, [title, postBody, files, mutation]);

  const addItem = useCallback((newPostItem: IPostIBodyItem) => {
    setPostBody(prevPostBody => ([
      ...prevPostBody,
      newPostItem,
    ]))
  }, []);

  const changeValue = useCallback((value: string, id?: string) => {
    console.log(value, '---', id)
    setPostBody(prevPostBody => prevPostBody.map((prevPostBodyItem) => {
      if (prevPostBodyItem.id === id) {
        return {
          ...prevPostBodyItem,
          value,
        }
      }

      return prevPostBodyItem;
    }))
  }, []);

  return (
    <Grid
      container
      spacing={1}
    >
      <Grid
        item
        xs={6}
      >
        <Paper sx={{ padding: 2 }} >
          <PostForm
            title={title}
            body={postBody}
            files={files}
            setTitle={setTitle}
            changeValue={changeValue}
            addItem={addItem}
            addPostsItemFile={addPostsItemFile}
            onSubmit={onSubmit}
            isPending={mutation.isPending}
            isSuccess={mutation.isSuccess}
            isError={mutation.isError}
          />
        </Paper>
      </Grid>
      <Grid
        item
        xs={6}
      >
        <Paper sx={{ padding: 2 }} >
          <PostWithLocalFiles
            title={title}
            items={postBody}
            files={files}
          />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default PostCreate;