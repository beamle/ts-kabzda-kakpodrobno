import React from 'react';

type AccordionProps = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}

const Accordion = (props: AccordionProps) => {
    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => props.onClick(!props.collapsed)}/>
            <AccordionBody collapsed={props.collapsed}/>
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle({title, onClick}: AccordionTitlePropsType) {
    return (
        <h3 onClick={onClick}>-----{title}-----</h3>
    )
}

type AccordionBodyPropsType = {
    collapsed: boolean
}

function AccordionBody({collapsed}: AccordionBodyPropsType) {
    return (
        <>
            {!collapsed &&
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            }
        </>
    )
}

export default Accordion;