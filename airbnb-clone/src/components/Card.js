const Card = (props) => {
    return (
        <div className = 'card'>
            <p className = 'card--state'>{props.state}</p>
            <img 
                src = {`../images/${props.image}`}
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
                    {props.rating}
                    <span className = 'gray-text'> ({props.rewiewCount}) • {props.country}</span>
                </p>
            </div>
            <p className = 'card_name'>{props.title}</p>
            <p>
                <span className = 'bold-text'>From ${props.price}</span> / person
            </p>
        </div>
    );
};

export default Card;