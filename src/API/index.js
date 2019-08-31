const url = "http://192.168.1.50:8000/";
let USER_TOKEN;

export async function signInUser(username, password) {
  let user;

  await getUserToken(username, password).then(token => {
    USER_TOKEN = token;
  });

  await getUser(USER_TOKEN).then(dataUser => {
    user = dataUser;
  });

  return user;
}

export async function getUserToken(username, password) {
  const urlPath = url + "api/login_check";

  try {
    let response = await fetch(urlPath, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });
    let responseJson = await response.json();
    return responseJson.token;
  } catch (error) {
    console.error(error);
  }
}

export async function getUser(token) {
  const urlPath = url + "api/";

  try {
    let response = await fetch(urlPath, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
