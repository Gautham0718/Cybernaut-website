export const initialVariants = {
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 1,
    x: -1024,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
  in: {
    x: 1024,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
