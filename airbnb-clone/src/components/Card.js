const Card = () => {
    return (
        <div className = 'card'>
            <p className = 'card--state'>
                SOLD OUT
            </p>
            <img 
                src = '../images/katie-zaferes.png'
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
                    5.0 
                    <span className = 'gray-text'> (6) • USA</span>
                </p>
            </div>
            <p className = 'card_name'>
                Life lessons with Katie Zaferes
            </p>
            <p>
                <span className = 'bold-text'>From $136</span> / person
            </p>
        </div>
    );
};

export default Card;