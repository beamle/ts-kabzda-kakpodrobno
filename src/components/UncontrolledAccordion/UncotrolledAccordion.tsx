import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle/AccordionTitle";

type AccordionProps = {
    title: string
}

const UncotrolledAccordion = (props: AccordionProps) => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>*/}
            {/*<AccordionBody collapsed={collapsed} setCollapse={setCollapsed}/>*/}
        </div>
    );
};



type AccordionBodyPropsType = {
    collapsed: boolean
    setCollapse: (collapsed: boolean) => void
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

export default UncotrolledAccordion;