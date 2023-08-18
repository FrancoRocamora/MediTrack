export const GET_ALL_FILES = "GET_ALL_FILES";

export const getAllFiles = (data) => {
    console.log(data)
    return {
      type: GET_ALL_FILES,
      payload: data,
    };
  };