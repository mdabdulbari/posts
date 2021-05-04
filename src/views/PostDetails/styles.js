const styles = (theme) => ({
  postContainer: {
    width: "60%",
    margin: "auto",
    paddingTop: 100,
    [theme.breakpoints.down("md")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
});

export default styles;
