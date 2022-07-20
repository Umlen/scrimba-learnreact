const Place = (props) => {
    return (
        <section className = 'place'>
            <img 
                src = {`${props.image}`} 
                alt = {`${props.name}`} 
                className = 'place_image'
            />
            <div className = 'place--info'>
                <div className = 'place--info--location'>
                    <img src = '../images/location-icon.png' alt ='' />
                    <p className = 'place--info--location_country'>{props.country}</p>
                    <a href = {`${props.googleMapUrl}`} target = '_blank' className = 'place--info--location_maplink'>
                        View on Google Maps
                    </a>
                </div>
                <h2 className = 'place--info_header'>{props.name}</h2>
                <p className = 'place--info_data'>{props.startDate} - {props.endDate}</p>
                <p className = 'place--info_description'>{props.description}</p>
            </div>
        </section>
    );
};

export default Place;