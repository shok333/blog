export const getNewFileName = (name: string, file: File) => {
  const extension = String(file.type).split('/')[1];
  const fileName = `${name}.${extension}`

  return fileName;
}