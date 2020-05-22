import axios from "axios";
import jwt from "jwt-decode";
const url = `${process.env.REACT_APP_API_URL}`;

export const createNewChat = (data) => {
  return (dispatch) => {
    dispatch({
      type: "CREATE_NEW_CHAT_CONTACT",
      payload: data,
    });
  };
};

export const showDetailRecentChat = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_DETAIL_RECENT_CHAT",
      payload: data,
    });
  };
};
// ...DATA DENGAN INI KITA BISA MASUKKAN 2 VALUE DARI HOME COMPONENT
export const addMessage = (...data) => {
  // console.log(data[0]);
  // console.log(data[1].message);

  const token = localStorage.getItem("token");
  const decodeToken = jwt(localStorage.getItem("token"));
  // console.log(decodeToken);

  return async (dispatch) => {
    try {
      const response = await axios.post(
        `${url}/chat/postchat`,
        {
          senderUserId: decodeToken.id,
          targetUserId: data[0],
          message: data[1].message,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
      dispatch({
        type: "ADD_MESSAGE",
        payload: response.data,
      });
    } catch (error) {
      window.alert(error);
    }
  };
};

export const getDataMessage = (dataTargetUserId) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${url}/chat/gettarget/${dataTargetUserId}`,
        {
          headers: {
            "x-access-token": token,
          },
        }
      );

      dispatch({
        type: "GET_DATA_MESSAGE",
        payload: response.data[0].messages,
      });
    } catch (error) {}
  };
};
