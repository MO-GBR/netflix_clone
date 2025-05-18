import moment from "moment";

import { startAuth, successAuth } from "../Reducers/userSlice";

const time = moment().format();

export const loginWithGoogle = (dispatch, user) => {
    try {
        dispatch(startAuth());

        dispatch(successAuth({
            user: {
                _id: user.id,
                username: user.displayName,
               email: user.email,
               photo: user.photoURL,
               loggedAt: time
            }
        }));
    } catch (error) {
        console.log(error);
    }
};