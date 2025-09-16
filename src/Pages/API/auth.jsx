

export async function loginUser(username, password) {
  const res = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Login failed");

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("userId", username);
    return true;
  }

  return false;
}

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

export function getUserId() {
  return localStorage.getItem("userId");
}
