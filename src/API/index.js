import { AsyncStorage } from "react-native";

const url = "http://192.168.1.50:8000/api/";

export async function signInUser(username, password) {
  let user;

  await getUserToken(username, password);

  await getUser().then(dataUser => {
    user = dataUser;
  });

  return user;
}

export async function getUserToken(username, password) {
  const urlPath = url + "login_check";

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

    try {
      await AsyncStorage.setItem("USER_TOKEN", responseJson.token);
    } catch (error) {
      console.log(error.message);
    }

    return responseJson.token;
  } catch (error) {
    console.error(error);
  }
}

export async function getUser() {
  const token = await AsyncStorage.getItem("USER_TOKEN");
  const urlPath = url;

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

export async function getCategory() {
  const token = await AsyncStorage.getItem("USER_TOKEN");
  const urlPath = url + "category";

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

export async function getLodgingsFromApiWithSearchText(text) {
  const token = await AsyncStorage.getItem("USER_TOKEN");
  const urlPath = `${url}property/${text}`;

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

export async function getLodgingDetailFromApi(id) {
  const token = await AsyncStorage.getItem("USER_TOKEN");
  const urlPath = `${url}property/find/${id}`;

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

export async function getReservationsUserFromApi() {
  const token = await AsyncStorage.getItem("USER_TOKEN");
  console.log(token);
  const urlPath = `${url}booking`;
  console.log(urlPath);
  try {
    let response = await fetch(urlPath, {
      method: "GET",
      headers: {
        Authorization: "Bearer" + token
      }
    });
    let responseJson = await response.json();

    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
