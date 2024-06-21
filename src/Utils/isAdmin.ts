export function isAdmin() {
  if (typeof window !== "undefined") {
    const role = window.localStorage.getItem("role");
    if (role === "admin") {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
