import sideBar6 from '../assets/utils/images/sidebar/city1.jpg';

export const LOGGED_IN_SUCCESS = 'LOGGED_IN_SUCCESS';
export const LOGGED_OUT_SUCCESS = 'LOGGED_OUT_SUCCESS';




export const logged_success = () => ({
    type: LOGGED_IN_SUCCESS
});

export const logged_out_success = () => ({
    type: LOGGED_OUT_SUCCESS
});



export default function reducer(state = {
    logged:false
}, action) {
    switch (action.type) {
        case LOGGED_IN_SUCCESS:
            return {
                ...state,
                logged: true
            };

            case LOGGED_OUT_SUCCESS:
            return {
                ...state,
                logged: false
            };
 
    }
    return state;
}