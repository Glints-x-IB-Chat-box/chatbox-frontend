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
  console.log(data[0]);
  console.log(data[1].message);

  const token = localStorage.getItem("token");
  const decodeToken = jwt(localStorage.getItem("token"));
  return async (dispatch) => {
    try {
      await axios.post(
        `${url}/chat/postchat`,
        {
          targetUserId: data,
          // message: data2,
        },
        {
          headers: {
            "x-access-token": token,
          },
        }
      );
    } catch (error) {
      window.alert(error);
    }
  };
};
