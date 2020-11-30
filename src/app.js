import React     from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from "redux";
import {connect}            from "react-redux";

import {Flats} from './containers';
import {
    deleteFromFavouritesAction,
    addToFavouritesAction,
    fetchFlats
} from "./store/actions";


class App extends React.Component {
    componentDidMount() {
        this.props.fetchFlats();
    }
    render() {
        const {
            deleteFromFavouritesAction,
            addToFavouritesAction,
            favourites,
            isPending,
            flats
        } = this.props;


        return (
            <div className="flats-application">
                {
                    isPending ?
                        <img
                            className='preloader'
                            src="https://www.bkmag.com/wp-content/uploads/2014/09/loading.gif"
                            alt="preloader"
                        /> :

                        <Flats
                            deleteFromFavourites={deleteFromFavouritesAction}
                            addToFavourites={addToFavouritesAction}
                            favourites={favourites}
                            flats={flats}
                        />
                }

            </div>
        );
    }
}

App.propTypes = {
    deleteFromFavouritesAction: PropTypes.func.isRequired,
    addToFavouritesAction:      PropTypes.func.isRequired,

    favourites: PropTypes.array.isRequired,
    flats:      PropTypes.array.isRequired,

    isPending:  PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    favourites: state.FlatsReducer.favourites,
    isPending:  state.FlatsReducer.isPending,
    flats:      state.FlatsReducer.flats
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        deleteFromFavouritesAction,
        addToFavouritesAction,
        fetchFlats
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
