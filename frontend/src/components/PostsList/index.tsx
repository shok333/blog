import { List, ListItem, ListItemText } from "@mui/material"
import { IPostsItem } from "../../types/post"

interface IPostsListProps {
  items: Array<IPostsItem>

}

export const PostsList = ({ items }: IPostsListProps) => {
  return (
    <List>
      {
        items.map(({ title, author, slug }) => (
          <ListItem
            alignItems="flex-start"
            key={slug}
          >
            <ListItemText
              primary={title}
              secondary={author}
            />
          </ListItem>
        ))
      }
    </List>
  )
}