const Card = (props) => {
    let cardState = null;
    if (props.item.openSpots === 0) {
        cardState = 'SOLD OUT';
    } else if (props.item.location === 'Online') {
        cardState = 'ONLINE';
    }

    console.log(props);

    return (
        <div className = 'card'>
            {cardState && <p className = 'card--state'>{cardState}</p>}
            <img 
                src = {`../images/${props.item.coverImg}`}
                alt = 'Katie Zaferes photo'
                className = 'card--img'
            />
            <div className = "card--rating">
                <img 
                    src = '../images/star.png'
                    alt = ' '
                    className = 'card--rating_icon'
                />
                <p className = 'card--rating_text'>
                    {props.item.stats.rating}
                    <span className = 'gray-text'> ({props.item.stats.reviewCount}) • {props.item.location}</span>
                </p>
            </div>
            <p className = 'card_name'>{props.item.title}</p>
            <p>
                <span className = 'bold-text'>From ${props.item.price}</span> / person
            </p>
        </div>
    );
};

export default Card;