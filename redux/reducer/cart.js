import produce from "immer";

export default produce((draft = {}, action) => {
  const { productType, addedProduct, productName, dishTypeID, productImg, type } = action;

  switch (type) {
    case "addToCart": {
      draft[productType] = { id: addedProduct, name: productName, image: productImg };
      return draft;
    }
    case "removeItem": {
      delete draft[dishTypeID];
      return draft;
    }
    case "removeCart": {
      draft = {};
      return draft;
    }
    default: {
      return draft;
    }
  }
});
