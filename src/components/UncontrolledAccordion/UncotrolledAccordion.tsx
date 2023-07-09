import React, {useReducer, useState} from 'react';
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import {reducer} from "./reducer";

type AccordionProps = {
    title: string
}


const UncotrolledAccordion = (props: AccordionProps) => {
    console.log("rendering Uncotrolled component")
    // const [collapsed, setCollapsed] = useState(true);
    let [state, dispatch] = useReducer(reducer, {collapsed: false});
    console.log("rendering Uncotrolled AFTER REDUCER component")

    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>*/}
            <AccordionBody collapsed={state.collapsed}/>
            <AccordionTitle title={props.title} onClick={() => {
                dispatch({type: "TOGGLE-COLLAPSED"}); // t.k dispatch proizoshel,
                // to react srazu reshaet pererisovatj komponentu > obrabytvaet vse funcii poka ne doided do useReducer
                // togda idet v const reducer -> menjaet v nej state i prisvaivaet ego k collapsed, a zatem prodolzhaet vyponjatj vse 4to dalshe idet posle useReducer
                console.log('rendering in title on click')
            }}/>
        </div>
    );
};



type AccordionBodyPropsType = {
    collapsed: boolean
}

function AccordionBody(props: AccordionBodyPropsType) {

    const showBody = () => {
        return (
            props.collapsed && <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>)
    }

    return (
        <>
            {showBody()}
        </>
    )
}

export default React.memo(UncotrolledAccordion);