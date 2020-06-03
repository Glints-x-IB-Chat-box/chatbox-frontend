import axios from "axios";
const url = `${process.env.REACT_APP_API_URL}`;

// FETCH HISTORY CHAT = TEXT/MESSAGE + TIME
export const fetchHistoryChat = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/chat/iscontact`, {
        headers: {
          "x-access-token": token,
        },
      });
      dispatch({
        type: "FETCH_HISTORY_CHAT",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// FETCH RECENT CHAT = DATA PROFILE ETC
export const fetchRecentChat = (data) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/chat/recentchat`, {
        headers: {
          "x-access-token": token,
        },
      });
      dispatch({
        type: "FETCH_RECENT_CHAT",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

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
// export const addMessage = (...data) => {
//   // console.log(data[0]);
//   // console.log(data[1]);

//   const token = localStorage.getItem("token");
//   const decodeToken = jwt(localStorage.getItem("token"));

//   return async (dispatch) => {
//     try {
//       const response = await axios.post(
//         `${url}/chat/postchat`,
//         {
//           senderUserId: decodeToken.id,
//           targetUserId: data[0],
//           message: data[1],
//         },
//         {
//           headers: {
//             "x-access-token": token,
//           },
//         }
//       );
//       dispatch({
//         type: "ADD_MESSAGE",
//         payload: response.data,
//       });
//     } catch (error) {
//       window.alert(error);
//     }
//   };
// };

export const getDataMessage = (data) => {
  return (dispatch) => {
    dispatch({
      type: "GET_DATA_MESSAGE",
      payload: data,
    });
  };
};

// export const getDataMessage = (dataTargetUserId) => {
//   const token = localStorage.getItem("token");
//   return async (dispatch) => {
//     try {
//       const response = await axios.get(
//         `${url}/chat/gettarget/${dataTargetUserId}`,
//         {
//           headers: {
//             "x-access-token": token,
//           },
//         }
//       );

//       dispatch({
//         type: "GET_DATA_MESSAGE",
//         payload: response.data[0],
//       });
//     } catch (error) {}
//   };
// };
