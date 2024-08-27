import { List, ListItem, ListItemText } from "@mui/material"
import { IPostsItem } from "../../types/post"
import Link from "next/link"

const POST_PATH = '/posts'

interface IPostsListProps {
  items: Array<IPostsItem>
}

export const PostsList = ({ items }: IPostsListProps) => {
  return (
    <List>
      {
        items.map(({ title, author, slug }) => (
          <Link
            key={slug}
            href={`${POST_PATH}/${slug}`}
          >
            <ListItem
              style={{ backgroundColor: 'white' }}
              alignItems="flex-start"
            >
              <ListItemText
                primary={title}
                secondary={author}
              />
            </ListItem>
          </Link>
        ))
      }
    </List>
  )
}