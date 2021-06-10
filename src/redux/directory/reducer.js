const INITIAL_STATE = {
  items: [
    {
      title: "Hats",
      linkUrl: "shop/hats",
      imageUrl:
        "https://images.unsplash.com/photo-1528219089976-22adb38bffa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
    },
    {
      title: "Sneakers",
      linkUrl: "shop/sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1609631349329-4955dc752df7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1525&q=80",
    },
    {
      title: "Jackets",
      linkUrl: "shop/jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
    {
      title: "Womens",
      linkUrl: "shop/womens",
      imageUrl:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80",
      isLarge: true,
    },
    {
      title: "Mens",
      linkUrl: "shop/mens",
      imageUrl:
        "https://images.unsplash.com/photo-1505632958218-4f23394784a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      isLarge: true,
    },
  ],
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
