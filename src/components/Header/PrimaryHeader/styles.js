const styles = (theme) => ({
  primaryHeader: {
    height: 64,
    padding: 10,
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
      height: 40,
      padding: 6,
    },
  },
  newPostButton: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  logo: {
    fontSize: 24,
    textDecoration: "none",
    color: "inherit !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default styles;
