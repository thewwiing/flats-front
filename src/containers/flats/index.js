import React     from 'react';
import PropTypes from "prop-types";

import {FlatItem} from '../../components/flats-components';

const Flats = (props) => {
    const {
        deleteFromFavourites,
        addToFavourites,
        favourites,
        flats
    } = props;

    return (
        <section className='flats'>
            <div className="container">
                <div className="flats__inner">
                    {
                        flats.length > 0 ? flats.map(flat => {

                            const isFav = favourites.includes(flat['id']);
                            return(
                                <FlatItem
                                    deleteFromFavourites={() => deleteFromFavourites(flat['id'])}
                                    addToFavourites={() => addToFavourites(flat['id'])}
                                    detailsInfo={flat['attributes']}
                                    ownerInfo={flat['relationships']}
                                    isFav={isFav}
                                    key={flat['id']}
                                />
                            )}) :

                                <h1 className='flats__hint'>
                                    Квартир нет
                                </h1>
                    }
                </div>
            </div>
        </section>
    );
};

Flats.propTypes = {
    deleteFromFavourites: PropTypes.func.isRequired,
    addToFavourites:      PropTypes.func.isRequired,

    favourites: PropTypes.array.isRequired,
    flats:      PropTypes.array.isRequired
};

export default Flats;
