const initialState = {
  dataMessage: [],
  RecentChatContacts: [],
  RecentChatContacts2: [],
  UnaddedRecentChat: [],
  detailRecentMessages: [],
  detailRecentMessages2: [],
  DetailChatRecentContact: {},
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_CHAT_CONTACT":
      console.log(action.payload);
      const find = state.RecentChatContacts.find((item) => {
        return item._id === action.payload._id;
      });
      const find2 = state.RecentChatContacts2.find((item) => {
        return item._id === action.payload._id;
      });
      let newRecentChatContacts = [];

      if (!find && !find2) {
        newRecentChatContacts = [action.payload, ...state.RecentChatContacts2];
      } else {
        newRecentChatContacts = state.RecentChatContacts2;
      }

      return {
        ...state,
        RecentChatContacts2: newRecentChatContacts,
      };

    case "SHOW_DETAIL_RECENT_CHAT":
      return { ...state, DetailChatRecentContact: action.payload };

    case "FETCH_HISTORY_CHAT":
      console.log(action.payload);

      const addedContact = action.payload.filter((item) => item.isContact);
      const unaddedContact = action.payload.filter((item) => !item.isContact);
      console.log(unaddedContact);

      return {
        ...state,
        RecentChatContacts: addedContact,
        UnaddedRecentChat: unaddedContact,
      };

    case "FETCH_RECENT_CHAT":
      // console.log(action.payload);
      // const addedContact = action.payload.find((item) => {
      //   return item.isContact == true;
      // });
      // if (!addedContact) {
      return { ...state, detailRecentMessages: action.payload };
    // } else {
    //   return { ...state, detailRecentMessages2: action.payload };
    // }

    // case "ADD_MESSAGE":
    //   console.log(state.dataMessage);

    //   return { ...state, dataMessage: [action.payload] };
    case "GET_DATA_MESSAGE":
      // const found = state.dataMessage.find((item) => {
      //   return item._id === action.payload._id;
      // });

      // let newDataMessage = [];
      // // console.log(state.dataMessage);

      // if (!found) {
      //   newDataMessage = [...state.dataMessage, action.payload];
      // } else {
      //   newDataMessage = state.dataMessage.map((item) => {
      //     if (action.payload._id === item._id) {
      //       return action.payload;
      //     }
      //     return item;
      //   });
      // }

      // console.log(newDataMessage);

      return { ...state, dataMessage: action.payload };
    default:
      return state;
  }
};

export default ChatReducer;
