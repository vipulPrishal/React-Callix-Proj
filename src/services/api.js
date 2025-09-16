// // src/services/api.js
// // Logic :---

// /*
// 1) used an async function to make the request
// 2) used the fetch api to make the request
// 3) used the json method to parse the response
// 4) used the api base url to make the request
// 5) used the user data to make the request
// 6) used the credentials to make the request
// 7) used the response to make the request
// */
// // Improved api.js with proper error handling

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// export const apiService = {
//   // POST - Create new data
//   async post(endpoint, data) {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   },

//   // GET - Retrieve data
//   async get(endpoint) {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   },

//   // PUT - Update entire resource
//   async put(endpoint, data) {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   },

//   // PATCH - Update partial data
//   async patch(endpoint, data) {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   },

//   // DELETE - Remove data
//   async delete(endpoint) {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, {
//       method: 'DELETE',
//       headers: {
//         Accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     return response.json();
//   },
// };

// -----version 2 :-- -to use the proxy in the development mode:---

// src/services/api.js
// Logic :---

/* 
1) used an async function to make the request
2) used the fetch api to make the request
3) used the json method to parse the response
4) used the api base url to make the request
5) used the user data to make the request
6) used the credentials to make the request
7) used the response to make the request
*/
// Improved api.js with proper error handling

// Use relative URL for development (Vite proxy will handle CORS)
// Use full URL for production

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const apiService = {
  async register(userData) {
    const response = await fetch(`${API_BASE_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    return response.json();
  },

  async login(credentials) {
    const response = await fetch(`${API_BASE_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return response.json();
  },
};

// ------------------------------------------------------- api.js version 3👇🏼👇🏼👇🏼👇🏼👇🏼👇🏼🌟🌟🌟🌟⭐
// --------------------------------------------------------------------------------------
