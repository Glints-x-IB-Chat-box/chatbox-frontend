import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}`;
// const url = `${process.env.URL_HOSTING_APP}`;

export const login = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/login`, data);
      const output = response.data;
      // console.log(output);
      if (output.status === "success") {

        //set status to online if user login
        const dataLogin = {
          status: "online"
        }
        const dataToken = {
          headers: {
            "x-access-token": output.data.token,
          },
        };
        await axios.put(`${url}/usersSecure/edit`, dataLogin, dataToken);

        dispatch({
          type: "AUTH_LOGIN",
          payload: output.data.token,
        });
      } else {
        dispatch({
          type: "AUTH_LOGIN_FAIL",
          payload: output.message,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const register = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/users/register`, data);
      const output = response.data;
      // console.log(output);
      if (output.status === "success") {
        dispatch({
          type: "AUTH_REGISTER",
          payload: output.message,
        });
      }
    } catch (error) {
      const output = error.response.data;
      // console.log(output);
      if (output.message) {
        dispatch({
          type: "AUTH_REGISTER_FAIL",
          payload: output.message,
        });
      } else {
        dispatch({
          type: "AUTH_REGISTER_INVALID",
          payload: output.error,
        });
      }
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {

      //set status to offline if user logout
      const token = localStorage.getItem("token");
      const dataLogout = {
        status: "offline"
      }
      const dataToken = {
        headers: {
          "x-access-token": token,
        },
      };
      await axios.put(`${url}/usersSecure/edit`, dataLogout, dataToken);

      dispatch({
        type: "AUTH_LOGOUT",
      });
    } catch (error) {
      console.log(error);
    }
    
  };
};
