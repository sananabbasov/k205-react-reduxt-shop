import { BASE_URL } from "../../api/Config"
import { LOGIN_USER } from "../Constants/UserConstants";

export const loginUserAction = (email, password) => async (dispach, getState) => {

    var user = await fetch(`${BASE_URL}Auth/login`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                Email: "admin@compar.az",
                Password:"Sanan@123"
            }
        )
    }).then(response => response.json())

    console.log("UserAction",user);

    if (user.status === 200) {
        
    }

    dispach({
        type: LOGIN_USER,
        payload: user
    })

}