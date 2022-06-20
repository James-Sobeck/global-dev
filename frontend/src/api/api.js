import { useId } from "react";

const API_BASE_URL =
   process.env.REACT_APP_API_BASE_URL || "https://cryptic-chamber-16664.herokuapp.com";
   //process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";

/**
 * Defines the default headers for these functions to work with `json-server`
 */
const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    console.log(`options: ${options}`)
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
      console.error(error);
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
     organization_id: "1",
    password: "password",
    mod1:  false,
    mod2: false,
    mod3: false,
    mod4:false,
    mod5:  false,
  }
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({data: tempUser}),
    
  };
  console.log(options);
  return await fetchJson(url, options, []);
}
export async function updateUserMod(user, modId){
  const url = new URL(`${API_BASE_URL}/reset`);
  if(modId = 1) user.mod1 = true;
  if(modId = 2) user.mod2 = true;
  if(modId = 3) user.mod3 = true;
  if(modId = 4) user.mod4 = true;
  if(modId = 5) user.mod5 = true;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({data: user}),
  };
  return await fetchJson(url, options, []);
}

export async function updateUser(useId, email, fn, ln, a1, a2, c, s, z, n, p, orgID, mod1, mod2, mod3, mod4, mod5){
  const url = new URL(`${API_BASE_URL}/reset`);
  const tempUser = {
    user_id: useId,
    email: email,
    first_name: fn ||"test",
    last_name: ln || "test",
    address_1: a1 || "test",
    address_2: a2 || "test",
    city: c || "test",
    state: s || "test",
    zip: z || "test",
    phone_number: n || "1255458040",
    organization_id: orgID || 1,
    password: p || "password",
    mod1: mod1 || false,
    mod2: mod2 || false,
    mod3: mod3 || false,
    mod4: mod4 || false,
    mod5: mod5 || false,
  }
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({data: tempUser}),
  };
  //console.log(tempUser);
  return await fetchJson(url, options, []);
}

export async function registerOrg(name, id, type, a1, a2, city, state, zip, phone_number){
  const url = new URL(`${API_BASE_URL}/org/register`);
  const tempOrg = {
    name: name || "test",
    ID: id || 2,
    type: type || "test",
    address_1: a1 || "test",
    address_2: a2 || "test",
    city: city || "test",
    state: state || "test",
    zip: zip || "test",
    phone_number: phone_number || "test",
    created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
   
  }
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({data: tempOrg}),
  };
  return await fetchJson(url, options, []);
}



export async function registerUsers(email, fn, ln, a1, a2, c, s, z, p, mc, mt, orgID){
  const url = new URL(`${API_BASE_URL}/register`);
  const tempUser = {
    email: email,
    first_name: fn ||"test",
    last_name: ln || "test",
    address_1: a1 || "test",
    address_2: a2 || "test",
    city: c || "test",
    state: s || "test",
    zip: z || "test",
    phone_number: "1255458040",
    organization_id: orgID || 1,
    password: "password",
    mod1:  false,
    mod2: false,
    mod3: false,
    mod4:false,
    mod5:  false,
  }
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({data: tempUser}),
  };
  //console.log(tempUser);
  return await fetchJson(url, options, []);
}

export async function loginUser(email, password){
  const url = new URL(`${API_BASE_URL}/login`); //login route
  const tempUser = {
    email,
    password
  }
  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify({data: tempUser}),
  }
  console.log(options)
  return await fetchJson(url, options, [])
}

export async function listModules(userID){
  
}