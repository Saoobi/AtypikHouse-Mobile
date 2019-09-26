import { AsyncStorage } from "react-native";

const url = "https://atypikhouse-f2i.tk/api/";

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

    let result = responseJson.token;

    if (result === undefined) {
      return false;
    } else {
      try {
        await AsyncStorage.setItem("USER_TOKEN", result);
      } catch (error) {
        console.log(error.message);
      }
      return result;
    }
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
    console.log("sqds");
    console.log(responseJson.myBooking);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function signUpUser(firstname, lastname, email, password) {
  const urlPath = url + "register";

  try {
    let response = await fetch(urlPath, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        firstname,
        lastname
      })
    });
    let responseJson = await response.json();

    console.log(responseJson);
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
  const urlPath = `${url}property/${text}`;

  try {
    let response = await fetch(urlPath);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getLodgingDetailFromApi(id) {
  const urlPath = `${url}property/find/${id}`;

  try {
    let response = await fetch(urlPath);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}

export async function getReservationsUserFromApi() {
  const token = await AsyncStorage.getItem("USER_TOKEN");
  const urlPath = url + "mybooking";

  try {
    let response = await fetch(urlPath, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token
      }
    });
    let responseJson = await response.json();
    //    console.log(responseJson);
    return responseJson;
  } catch (error) {
    console.error(error);
  }
}
