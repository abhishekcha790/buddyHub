// formatUser.js
//
// This utility function takes the source of authentication (Google or Phone)
// and returns a formatted user object containing:
// - `image`: profile image URL
// - `method`: login method (either "google" or "phone")
//
// Usage:
// formatUser("google", { image: "https://..." }) → returns user with Google image
// formatUser("phone") → returns user with default avatar and method "phone"

export const formatUser = (source, data = {}) => {
  if (source === "google") {
    return {
      image: data.image || "",
      method: "google",
    };
  }

  if (source === "phone") {
    return {
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      method: "phone",
    };
  }

  return null;
};