const styles = (theme) => ({
  postCard: {
    width: "70%",
    margin: "auto",
    marginBottom: 50,
    padding: "30px 50px",
    color: theme.textColor,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      padding: "20px 40px",
      marginBottom: 30,
    },
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      padding: "10px 20px",
      marginBottom: 30,
    },
  },
  postTitleHeading: {
    margin: 0,
  },
  postTitle: {
    textTransform: "uppercase",
    fontSize: 50,
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: "none",
    color: "inherit",
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
  description: {
    color: "#9eacb6",
    fontSize: 20,
    fontWeight: 500,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  verticalLine: {
    display: "inline-block",
    width: 4,
    height: 140,
    backgroundColor: theme.palette.primary.main,
    marginRight: 10,
  },
  actionButton: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  },
  date: {
    color: "#9eacb6",
    textTransform: "uppercase",
    fontSize: 10,
  },
});

export default styles;
