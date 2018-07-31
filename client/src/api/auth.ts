export const login = (username: string, password: string) => {
  const headers = {"Content-Type": "application/json"};
  const body = JSON.stringify({username, password});

  return fetch("/api/auth/login/", {headers, body, method: "POST"})
    .then(res => {
      if (res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        // console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status !== 200) {
        throw res.data;
      }
      return res.data;
    })
}

export const register = (username: string, password: string) => {
  const headers = {"Content-Type": "application/json"};
  const body = JSON.stringify({username, password});

  return fetch("/api/auth/register/", {headers, body, method: "POST"})
    .then(res => {
      if (res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        // console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status !== 200) {
        throw res.data;
      }
      return res.data;
    })
}

export const logout = () => {
  const headers = {"Content-Type": "application/json"};

  return fetch("/api/auth/logout/", {headers, body: "", method: "POST"})
    .then(res => {
      if (res.status === 204) {
        return {status: res.status, data: {}};
      } else if (res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        // console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status !== 200) {
        throw res.data;
      }
      return res.data;
    })
}