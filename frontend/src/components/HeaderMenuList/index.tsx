import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"

interface HeaderMenuList {
  mobile: boolean;
  row: boolean;
}

export const HeaderMenuList = ({ mobile = false, row = false }) => {
  return (
    <List
      sx={{
        display: {
          xs: mobile ? 'flex' : 'none',
          lg: mobile ? 'none' : 'flex'
        },
        flexDirection: row ? 'row' : 'column',
      }}
    >
      {['All mail', 'Trash', 'Spam'].map((text) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}