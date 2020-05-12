import axios from "axios";

const url = `${process.env.REACT_APP_API_URL}`;
// const url = `${process.env.URL_HOSTING_APP}`;

export const getDataUser = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${url}/users/searchuser`, {
        params: {
          username: data,
        },
      });
      dispatch({
        type: "GET_DATA_CONTACT",
        payload: response.data,
      });
    } catch (error) {
      window.alert(error);
    }
  };
};
export const showEditForm = () => {
  // DISPATCH DIPAKAI DENGAN SYARAT
  return (dispatch) => {
    dispatch({
      type: "SHOW_EDIT_FORM",
      // payload: dataInitial,
    });
  };
};

export const hideEditForm = () => {
  return {
    type: "HIDE_EDIT_FORM",
  };
};

export const showAboutForm = () => {
  // DISPATCH DIPAKAI DENGAN SYARAT
  return (dispatch) => {
    dispatch({
      type: "SHOW_ABOUT_FORM",
      // payload: dataInitial,
    });
  };
};

export const hideAboutForm = () => {
  return {
    type: "HIDE_ABOUT_FORM",
  };
};

export const showAddContactForm = () => {
  // DISPATCH DIPAKAI DENGAN SYARAT
  return (dispatch) => {
    dispatch({
      type: "SHOW_ADDCONTACT_FORM",
      // payload: dataInitial,
    });
  };
};

export const hideAddContactForm = () => {
  return {
    type: "HIDE_ADDCONTACT_FORM",
  };
};

export const showDeleteContactForm = () => {
  // DISPATCH DIPAKAI DENGAN SYARAT
  return (dispatch) => {
    dispatch({
      type: "SHOW_DELETECONTACT_FORM",
      // payload: dataInitial,
    });
  };
};

export const hideDeleteContactForm = () => {
  return {
    type: "HIDE_DELETECONTACT_FORM",
  };
};

export const showChangeImageForm = () => {
  // DISPATCH DIPAKAI DENGAN SYARAT
  return (dispatch) => {
    dispatch({
      type: "SHOW_CHANGEIMAGE_FORM",
      // payload: dataInitial,
    });
  };
};

export const hideChangeImageForm = () => {
  return {
    type: "HIDE_CHANGEIMAGE_FORM",
  };
};
