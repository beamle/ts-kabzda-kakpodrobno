import React, {useState} from 'react';

type AccordionProps = {
    title: string
}

const UncotrolledAccordion = (props: AccordionProps) => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => setCollapsed(!collapsed)}/>
            <AccordionBody collapsed={collapsed} setCollapse={setCollapsed}/>
        </div>
    );
};


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>-----{props.title}-----</h3>
    )
}

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