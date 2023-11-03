export const getImage = async () => {
  const { url } = await fetch(
    "https://source.unsplash.com/random/300*300/?poor,donation"
  );
  return url;
};
