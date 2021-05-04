const styles = (theme) => {
  return {
    headerContainer: {
      paddingTop: 64,
      [theme.breakpoints.down("xs")]: {
        paddingTop: 39,
      },
    },

    header: {
      height: 300,
      [theme.breakpoints.down("md")]: {
        height: 250,
        paddingTop: 75,
      },
      [theme.breakpoints.down("sm")]: {
        height: 200,
        paddingTop: 56,
      },
      [theme.breakpoints.down("xs")]: {
        height: 150,
        paddingTop: 45,
      },
    },
    title: {
      fontWeight: "700 !important",
      color: theme.textColor,
      position: "absolute",
      top: 300,
      left: "50%",
      fontSize: 164,
      transform: "translate(-50%, -50%)",
      [theme.breakpoints.down("md")]: {
        fontSize: 108,
        top: 220,
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: 95,
        top: 180,
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: 72,
        top: 120,
      },
    },
  };
};

export default styles;
