import React, {useState} from 'react';
import ControlledSelect from "../ControlledSelect/ControlledSelect";
import ControlledSelectDm from "../ControlledSelectDm/ControlledSelectDm";
import UseMemo from "../useMemo/UseMemo";

type ItemType = {
    title: string
    value: any
}


export type AccordionProps = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
    items:  ItemType[]
    onClickSelect: (value: any) => void

}

const Accordion = (props: AccordionProps) => {
    const [selectedItem, setSelectedItem] = useState('Select')

    return (
        <div>
            <AccordionTitle title={props.title} onClick={() => props.onClick(!props.collapsed)}/>
            <AccordionBody collapsed={props.collapsed} items={props.items} onClickSelect={props.onClickSelect}/>
            <ControlledSelect  items={[{title: 'Tallinn', value: 1},{title: 'Riga', value: 2}, {title: 'Vilniusss', value: 3}]}
                               setSelectedItem={setSelectedItem}
                               selectedItem={selectedItem}/>
            <UseMemo setSelectedItemValue={setSelectedItem} items={[{country: 'Estonia', title: 'Tallinn', value: 1}]}/>
            {/*<ControlledSelectDm  items={[{title: 'Tallinn', value: 1},{title: 'Riga', value: 2}, {title: 'Vilniusss', value: 3}]} setVelectedItemValue={setSelectedItemValue} selectedItemValue={'2'}/>*/}
        </div>
    );
};

type AccordionTitlePropsType = {
    /**
     * This is a comment describing the element.
     * @param {string} parameterName - Description of the parameter.
     * @returns {number} - Description of the return value.
     */
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
    items: ItemType[]
    onClickSelect: (value: any) => void
}

export function AccordionBody({collapsed, items, onClickSelect}: AccordionBodyPropsType) {
    return (
        <ul>
            {!collapsed && items.map((el, idx) => <li key={idx} onClick={() => {onClickSelect(el.value)}}>{el.title}</li>)}
        </ul>
    )
}

export default React.memo(Accordion);