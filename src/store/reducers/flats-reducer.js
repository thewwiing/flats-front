const initialState = {
    isPending: false,
    favourites: JSON.parse(localStorage.getItem('favourites')) || [],
    flats: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PENDING': {
            return {
                ...state,
                isPending: true
            }
        }
        case 'GET_FLATS': {
            return {
                ...state,
                flats: action.payload,
                isPending: false,
            }
        }
        case 'ADD_TO_FAVOURITES': {
            const favourites = [...state.favourites, action.payload];
            localStorage.setItem('favourites', JSON.stringify(favourites));
            return {
                ...state,
                favourites
            }
        }
        case 'DELETE_FROM_FAVOURITES': {
            let favourites = state.favourites;
            const id = action.payload;

            favourites.splice(favourites.indexOf(id), 1);
            localStorage.setItem('favourites', JSON.stringify(favourites));
            return {
                ...state,
                favourites: []
            }
        }
        default:
            return state;
    }
}
