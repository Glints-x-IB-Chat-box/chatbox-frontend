const initialState = {
  dataUser: [],
  dataContact: [],
  dataDelete: [],
  dataProfile: [],
  dataBlocked: [],
  showBlockData: {},
  isShowBlock: false,
  isShowEdit: false,
  isShowAbout: false,
  isShowAdd: false,
  isShowDelete: false,
  isShowPictureForm: false,
  isShowLogoutForm: false,
};

// DETAILS OF THESE COULD BE FIND IN THE ACTION CREATOR OF MAIN.
const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_USER":
      return { ...state, dataUser: action.payload };

    // AFTER DELETED THE FILE, we need to update to user that he already deleted it, and to make it we use Filter
    // We Filter whether the dataId is same with current Contact Data, if same then we will exclude it.
    // Inside new variable it will contain new data that filtered.
    case "DELETE_DATA_CONTACT":
      const dataFiltered = state.dataContact.filter((item) => {
        if (item._id === action.payload) return false;
        return true;
      });
      return { ...state, dataContact: dataFiltered };
    case "GET_DATA_CONTACT":
      return { ...state, dataContact: action.payload };
    case "ADD_DATA_CONTACT":
      return { ...state, dataContact: [...state.dataContact, action.payload] };
    case "SHOW_EDIT_FORM":
      return { ...state, isShowEdit: true };
    case "HIDE_EDIT_FORM":
      return { ...state, isShowEdit: false };
    case "SHOW_ABOUT_FORM":
      return { ...state, isShowAbout: true };
    case "HIDE_ABOUT_FORM":
      return { ...state, isShowAbout: false };
    case "SHOW_ADDCONTACT_FORM":
      return { ...state, isShowAdd: true };
    case "HIDE_ADDCONTACT_FORM":
      return { ...state, isShowAdd: false };
    case "SHOW_DELETECONTACT_FORM":
      return { ...state, isShowDelete: true, dataDelete: action.payload };
    case "HIDE_DELETECONTACT_FORM":
      return { ...state, isShowDelete: false };
    case "SHOW_CHANGEIMAGE_FORM":
      return { ...state, isShowPictureForm: true };
    case "HIDE_CHANGEIMAGE_FORM":
      return { ...state, isShowPictureForm: false };
    case "GET_DATA_PROFILE":
      return { ...state, dataProfile: action.payload };
    case "UPDATE_DATA_PROFILE":
      return { ...state, dataProfile: action.payload };
    case "ADD_DATA_BLOCKED":
      return { ...state, datablocked: [...state.dataBlocked, action.payload] };
    case "SHOW_BLOCKED_FORM":
      return { ...state, isShowBlock: true, showBlockData: action.payload };
    case "HIDE_BLOCKED_FORM":
      return { ...state, isShowBlock: false };
    default:
      return state;
  }
};

export default MainReducer;
