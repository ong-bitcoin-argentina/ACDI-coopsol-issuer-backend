const Axios = require("axios").default;

const ISSUER_URI = process.env.ISSUER_URI;
 
const axios = Axios.create({
  baseURL: ISSUER_URI,
});

/* TODO: Implementar mecanismo de autenticacion en caso de que se realicen llamadas
desde este backend al backend del issuer */

/* Abstraer aca toda la logica de llamadas a traves de axios */

class DidiIssuerSdk {
  constructor() {
  }

  auth(){
    const path = "/user";
    return {
      login: async (credentials) => {
        const response = await axios.post(`${path}/login`, credentials);
        const { status, data: payload } = response.data;
        if (status === "success") {
          return payload;
        } 
      }
    }
  }

  certs() {
    const path = "/cert";
    return {
      create: async (data, templateId) => {
        console.log(JSON.stringify(data))
       const response = await axios.post(`${path}`, {
          data: JSON.stringify(data),
          templateId,
          microCredentials: [],
          split: false,
        });

        const { status, data: payload } = response.data;
        if (status === "success") {
          return payload;
        }

      },
      emit: async (id) => {
        const response = await axios.post(`${path}/${id}/emmit`, null);
        console.log(response.data);
        return response.data;


      },
      all: async () => {
        const response = await axios.get(`${path}/all`);
        return response.data; //TODO: handle errors
      },
      find: async () => {
        const response = await axios.get(`${path}/find`);
        return response.data;
      },
      get: async (id) => {
        const response = await axios.get(`${path}/${id}`);
        const { status, data } = response.data;
        if (status === "success") {
          return data;
        }
      },
      update: async (id, data) => {
        const response = await axios.put(`${path}/${id}`, data);
        return response.data;
      },
    }
  }
  templates() {
    const path = "/template";

    return {
      all: async () => { },
      find: async () => { },
      get: async (id) => { },
      update: async (id, data) => { },
      delete: async (id) => { },
      create: async (data) => { },
      emit: async (id) => { }
    }
  }
  participants() {
    const path = "/participant"
    return {
      create: async (data) => {
        const response = await axios.post(`${path}/new`, {
          data:  [
            {
              "name": "Cosme Fulanito",
              "did": "did:ethr:0x7f3d1b4d87e5f3835be3e356ffdfddd66ccf6824",
              "data": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "templateId": "string",
              "requestCode": "string",
              "new": true,
              "deleted": true,
              "createdOn": "2022-04-20T17:34:11.361Z"
            }
          ]
        });
        return response.data
       },
      
    }
  }




}
module.exports = DidiIssuerSdk;