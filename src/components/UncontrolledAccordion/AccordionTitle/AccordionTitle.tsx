import React from 'react';

type AccordionTitlePropsType = {
    /**Title is title you see on the screen */
    title: string
    onClick: () => void
}


function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>-----{props.title}-----</h3>
    )
}


export default AccordionTitle;


