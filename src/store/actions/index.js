import {api} from "../../request-service";

export const setPendingAction = () => ({type: 'SET_PENDING'});

export const addToFavouritesAction = payload => ({type: 'ADD_TO_FAVOURITES', payload});
export const deleteFromFavouritesAction = payload => ({type: 'DELETE_FROM_FAVOURITES', payload});

export const fetchFlats = () => (dispatch) => {
    dispatch(setPendingAction());
    api.get('flats').then(data => {
        dispatch({
            type: 'GET_FLATS',
            payload: data
        })
    })
};
