const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);

    if (response.status === 204) {
      return null;
    }

    const payload = await response.json();

    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function registerUser(email, password){
  const url = new URL(`${API_BASE_URL}/register`);
  const tempUser = {
    email: email,
    first_name: "test",
    last_name: "test",
    address_1: "test",
    address_2: "test",
    city: "test",
    state: "test",
    zip: "test",
    phone_number: "1255458040",
    // organization_id: "1",
    module_id_complete: "1",
    module_id_todo: "2",
    password: password,
  }
  const options = {
    method: "POST",
    body: JSON.stringify(tempUser),
  };
  console.log(options);
  return await fetchJson(url, options, []);
}

export async function loginUser(email,password){
  const url = new URL(`${API_BASE_URL}/login`); //login route
  const tempUser = {
    email,
    password
  }
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(tempUser),
  }
  return await fetchJson(url, options, [])
}