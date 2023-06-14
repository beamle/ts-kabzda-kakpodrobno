import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

type RatingProps = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
    ratingValue: RatingValueType
    onClick: (ratingValue: RatingValueType) => void
}

function Rating({onClick, ratingValue}: RatingProps) {
    return (
        <div>
            <hr/>
            <Star selected={ratingValue > 0} callback={onClick} ratingValue={1}/>
            <Star selected={ratingValue > 1} callback={onClick} ratingValue={2}/>
            <Star selected={ratingValue > 2} callback={onClick} ratingValue={3}/>
            <Star selected={ratingValue > 3} callback={onClick} ratingValue={4}/>
            <Star selected={ratingValue > 4} callback={onClick} ratingValue={5}/>
            <hr/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    callback: (ratingValue: RatingValueType) => void
    ratingValue: RatingValueType
}

function Star({callback, selected, ratingValue}: StarPropsType) {

    const starSelectedStyle = { fontWeight: selected ? 'bold' : 'normal' }

    return (
        <span onClick={() => callback(ratingValue)} style={starSelectedStyle}>stare </span>
    )
}

export default Rating;