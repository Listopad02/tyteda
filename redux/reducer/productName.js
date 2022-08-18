case "addProductToCart": {
    draft = { ...draft, [product]: productName };
    return draft;
  }