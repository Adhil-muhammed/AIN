export const gramToAed = (gram, pricePerGram) => {
  return (parseFloat(gram) * pricePerGram).toFixed(2);
};

export const aedToGram = (aed, pricePerGram) => {
  return (parseFloat(aed) / pricePerGram).toFixed(4);
};
