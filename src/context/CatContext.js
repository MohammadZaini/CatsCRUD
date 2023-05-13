import createDataContext from "./createDataContext";

const catReducer = (state, action) => {

    switch(action.type) {
        case 'add_cat': 
            return [...state, 
                {id: Math.floor(Math.random() * 99999),
                name: action.payload.name, 
                breed: action.payload.breed, 
                description: action.payload.description}];

        case 'delete_cat': 
            return state.filter((cat) => cat.id !== action.payload);

        case 'edit_cat': 
            return state.map( cat => {
                return cat.id === action.payload.id ? action.payload : cat
            });

        default:
            return state;
    };
};

const addCat = dispatch => {
    return (name, breed, description, callback) => {
        dispatch({
            type: 'add_cat',
            payload: {name, breed, description}
        });
        if(callback) {
            callback();
        };
    };
    
};

const editCat = dispatch => {
    return (id , name, breed, description, callback) => {
        dispatch({
            type: 'edit_cat',
            payload: {id , name, breed, description}
        });
        if(callback) {
            callback();
        };
    };
};

const deleteCat = dispatch => {
    return (id) => {
        dispatch({
            type: 'delete_cat',
            payload: id
        });
    };
};

export const {Context, Provider} = createDataContext(
    catReducer,
    {addCat, editCat, deleteCat},
    []);