import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  pageWrapper: {
    height: "100vh",
  },
  photoWrapper: {
    width: "50%",
    position: "relative",
  },
  contentWrapper: {
    width: '50%',
  },
  content: {
    maxWidth: 540,
    margin: 'auto',
  }
}));
