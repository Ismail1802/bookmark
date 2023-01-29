export const logoAnimation = {
  initial: {
    y: "-20%",
    opacity: 0,
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.1 },
  }),
};

export const ListVariants = {
  initial: {
    opacity: 0,
    y: "-20%",
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: "-20%",
  },
};
export const NavbarVariants = {
  initial: {
    opacity: 0,
    y: "-20%",
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: "-20%",
  },
};

export const modalAnimation = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
    },
  },
};
export const modalListAnimation = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
  },
};

export const backAnimation = {
  initial: {
    x: 200,
  },
  animate: {
    x: 0,
  },
};

export const imageAnimation = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
};

export const opacityAnimation = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
