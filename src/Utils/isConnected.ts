export function isConnected() {
  if (typeof window !== "undefined") {
    const jwt = window.localStorage.getItem("token");
    if (jwt !== null) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
