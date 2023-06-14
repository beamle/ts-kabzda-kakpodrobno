import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

function Rating() {
    const [ratingValue, setRatingValue] = useState(0);

    return (
        <div>
            <hr/>
            <Star selected={ratingValue > 0} callback={() => setRatingValue(1)}/>
            <Star selected={ratingValue > 1} callback={() => setRatingValue(2)}/>
            <Star selected={ratingValue > 2} callback={() => setRatingValue(3)}/>
            <Star selected={ratingValue > 3} callback={() => setRatingValue(4)}/>
            <Star selected={ratingValue > 4} callback={() => setRatingValue(5)}/>
            <hr/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callback: () => void
}

function Star({callback, selected}: StarPropsType) {

    const starSelectedStyle = { fontWeight: selected ? 'bold' : 'normal' }

    return (
        <span onClick={callback} style={starSelectedStyle}>stare </span>
    )
}

export default Rating;