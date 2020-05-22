const initialState = {
  dataMessage: [],
  RecentChatContacts: [],
  DetailChatRecentContact: {},
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW_CHAT_CONTACT":
      console.log(action.payload);
      const find = state.RecentChatContacts.find((item) => {
        return item._id === action.payload._id;
      });
      let newRecentChatContacts = [];

      if (!find) {
        newRecentChatContacts = [action.payload, ...state.RecentChatContacts];
      } else {
        newRecentChatContacts = state.RecentChatContacts;
      }

      return {
        ...state,
        RecentChatContacts: newRecentChatContacts,
      };

    case "SHOW_DETAIL_RECENT_CHAT":
      return { ...state, DetailChatRecentContact: action.payload };
    case "ADD_MESSAGE":
      return { ...state, dataMessage: [action.payload] };
    case "GET_DATA_MESSAGE":
      const found = state.dataMessage.find((item) => {
        return item._id === action.payload._id;
      });

      let newDataMessage = [];

      if (!found) {
        newDataMessage = [...state.dataMessage, action.payload];
      } else {
        // console.log(state.dataMessage);

        newDataMessage = state.dataMessage.map((item) => {
          if (action.payload._id === item._id) {
            return action.payload;
          }
          return item;
        });
      }

      // console.log(newDataMessage);

      return { ...state, dataMessage: newDataMessage };
    default:
      return state;
  }
};

export default ChatReducer;
