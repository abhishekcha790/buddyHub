export const formatUser = (source, data = {}) => {
  if (source === "google") {
    return {
      image: data.image || "",
      method: "google",
    };
  }

  if (source === "phone") {
    return {
      picture: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      method: "phone",
    };
  }

  return null;
};