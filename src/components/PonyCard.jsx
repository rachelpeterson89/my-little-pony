import profile from '../assets/img/ponies.jpeg';

const PonyCard = props => {

    // deconstructing props
    const { name, bodyColor, maneColor, age, hasWings, isUnicorn, freePony, idx, isSelected, togglePony } = props;

    // conditional rendering for ponies over 10 years, bg color pink
    return <div onClick={() => togglePony(idx)} className="card m-2 mx-auto d-flex flex-wrap rounded" style={isSelected ? {backgroundColor:"pink"}: {}}>
        <img src={ profile } alt={ name } className="card-image-top"/>
        <div className="card-body">
            <h4 className="card-title text-center">{ name }</h4>
            <p className="card-text">Coat Color: { bodyColor }</p>
            <p className="card-text">Mane Color: { maneColor }</p>
            <p className="card-text">Age: { age }</p>
            <p className="card-text">Has Wings: { hasWings }</p>
            <p className="card-text">Is Unicorn: { isUnicorn }</p>
        </div>
        <div className="card-footer">
            <button className="btn btn-info" onClick={ ()=>freePony(idx) }>Free Pony</button>
        </div>
    </div>

}

export default PonyCard;