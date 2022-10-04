export const galleryStyles: any = (theme: any) => ({
  titlebox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px",
    marginTop: "20px",
  },

  titleText: {
    fontSize: "35px !important",
    fontFamily: "Fira Sans !important",
    fontStyle: "normal !important",
    fontWeight: "700 !important",

    lineHeight: "48px !important",

    textTransform: "capitalize !important",

    color: "#272522 !important",
  },
  card: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  imgCard: {
    "&:hover": {
      opacity: 0.6,
    },
  },

  cardActions: {
    position: "absolute",
    top: "50%",
    left: "50%",
    display: "none",
  },
});
