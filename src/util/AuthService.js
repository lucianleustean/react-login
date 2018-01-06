export function authenticate(cb) {
  console.log("authenticating");
  setTimeout(cb, 100) // fake async
}

export function isAuthenticated() {
  return false
}
