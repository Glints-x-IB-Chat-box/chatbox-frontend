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
        // console.log(item.usersId[0]);
        // console.log(action.payload._id);
        return item.usersId[1] === action.payload._id;
      });

      // FIND & FIND2 is made to check if the added contact has already added or not in our CURRENT RecentChat.
      const find2 = state.RecentChatContacts.find((item) => {
        return item.usersId[0] === action.payload._id;
      });

      // FIND3 is made to check if the added contact has already added or not at the last time we add person.
      const find3 = state.RecentChatContacts2.find((item) => {
        return item._id === action.payload._id;
      });

      let newRecentChatContacts = [];

      // IF the data that we add is not found in our RECENT DATA, then we can continue to add it.
      // The action.payload will be added to the RecentChatContacts2 BECAUSE it CAN'T be added in RecentChatContacts.
      if (!find && !find2 && !find3) {
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

      // The result of action.payload is data with the indicator on "isContact", in "isContact"
      // it determines whether the recent chat is our contact or not by true & false,
      // So we filter here to check if each Item's "isContact" TRUE or FALSE.
      // IF TRUE go to addedContact, IF FALSE go to unadded contact.
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

    // READ THE ACTIONCREATOR
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
