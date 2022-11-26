export const variants = {
  inactive: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "linear",
    },
  },

  out: {
    opacity: 0,
    x: typeof window !== "undefined" ? -window.screen.width : 0,
    transition: {
      duration: 0.6,
      ease: "linear",
    },
  },

  in: {
    opacity: 0,
    x: typeof window !== "undefined" ? window.screen.width : 0,
    transition: {
      duration: 0.6,
      ease: "linear",
    },
  },
};
