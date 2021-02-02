import * as types from "./type";
import { useDispatch } from "react-redux";

const authActions = () => {
  const dispatch = useDispatch();

  const setIsAuth = (isauth) => {
    dispatch({
      type: types.SET_ISAUTH,
      payload: isauth,
    });
  };

  return {
    setIsAuth,
  };
};

export default authActions;
