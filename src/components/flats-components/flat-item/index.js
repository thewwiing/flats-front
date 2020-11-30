import React     from 'react';
import PropTypes from "prop-types";

const FlatItem = (props) => {
    const {
        deleteFromFavourites,
        addToFavourites,
        detailsInfo: {
            address,
            title,
            rooms,
            area,
            unit
        },
        ownerInfo: {
            attributes,
            type
        },
        isFav
    } = props;

    const {city, house, room, street} = address;
    const {first_name, last_name, middle_name} = attributes;


    const ownerType = type === 'agent' ? 'Агент' : 'Хозяйн';
    const ownerName = last_name + ' ' + first_name + ' ' + middle_name;

    const toggleFav = isFav ? deleteFromFavourites : addToFavourites;

    return (
        <div className='flat-item'>
            <div className="flat-item__img">
                <img src='https://atrkt-photos-kr.kcdn.kz/webp/40/405c6fdf-edb3-4c3b-be4d-fe3cc692be44/1-560x350.jpg' alt=""/>
            </div>
            <div className="flat-item__content">

                <div className="flat-item__content-main">
                    <h2>{title}</h2>
                    <h3>{street}, {house}, кв. {room}</h3>
                </div>

                <div className="flat-item__content-details">
                    <div className='flat-item__content-details-item'>
                        <span>Кол-во комнат:</span>
                        <span>{rooms}</span>
                    </div>
                    <div className='flat-item__content-details-item'>
                        <span>Площадь:</span>
                        <span>{area} {unit}.</span>
                    </div>
                    <div className='flat-item__content-details-item'>
                        <span>{ownerType}:</span>
                        <span className='name'>{ownerName}</span>
                    </div>
                </div>

                <div className="flat-item__content-city">
                    <span>{city}</span>
                </div>

            </div>

            <div className="flat-item__like"
                 onClick={toggleFav}
            >
                {
                    isFav ?
                        <span className="icon-heart">
                            <span className="path1"/>
                            <span className="path2"/>
                        </span> :
                        <span className='icon-heart-empty'/>
                }
            </div>
        </div>
    );
};

FlatItem.propTypes = {
    deleteFromFavourites: PropTypes.func.isRequired,
    addToFavourites:      PropTypes.func.isRequired,

    detailsInfo: PropTypes.object.isRequired,
    ownerInfo:   PropTypes.object.isRequired,

    isFav:      PropTypes.bool.isRequired
};

export default FlatItem;
