import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { useStyles } from "./styles";

function normalize(str: string) {
  return str.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function (str) { return str.toUpperCase(); });
}

export default function Summary(values: any) {
  const classes = useStyles();

  return (
    <div className={classes.summary}>
      <Typography variant="h4" component="h4" gutterBottom>
        Summary
      </Typography>

      <List>
        {Object.keys(values.values).map((value, idx) => {
          return (
            <ListItem key={idx}>
              <ListItemText
                primary={normalize(value)}
                secondary={
                  (Array.isArray(values.values[value]) && values.values[value].length > 0)
                    ? values.values[value].map((val: any) => val).join(", ")
                    : values.values[value].toString()
                }
              />
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}
