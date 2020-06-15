import axios from "axios";
const url = `${process.env.REACT_APP_API_URL}`;

// FETCH HISTORY CHAT = RECENT TEXT/MESSAGE + TIME
export const fetchHistoryChat = (inputSearch) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/chat/iscontact`, {
        headers: {
          "x-access-token": token,
        },
      });
      // After Get the INPUT WORDS from user, we use Filter & Include function.
      // The Result of filter would lead to exclude/delete it
      // Include will do the search function and return with expected result.
      const filteredContact = response.data.filter((item) => {
        return item.targetUserId.username.includes(inputSearch);
      });
      dispatch({
        type: "FETCH_HISTORY_CHAT",
        payload: filteredContact,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// FETCH RECENT CHAT = RECENT DATA PROFILE ETC
export const fetchRecentChat = () => {
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

// THE FUNCTION OF CHAT FEATURE IN LISTCONTACT
export const createNewChat = (data) => {
  return (dispatch) => {
    dispatch({
      type: "CREATE_NEW_CHAT_CONTACT",
      payload: data,
    });
  };
};

// THE FUNCTION TO GET THE DATA OF 1 RECENT CHAT CONTACT THAT USER CLICK (USERNAME & IMAGE)
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

// Was once used to get dataMessage (CHATS) from route "/CHAT/GETTARGET/TARGET ID",
// IN HOME.JS component, there are axios.get there that used to get data Message.
// The Result (Response.data) will be pass to here and will be fetch in the CHATCOMPONENT.JS
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

export const fetchBlockedUser = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/usersSecure/getBlocked`, {
        headers: {
          "x-access-token": token,
        },
      });
      dispatch({
        type: "FETCH_BLOCKED_USER",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
