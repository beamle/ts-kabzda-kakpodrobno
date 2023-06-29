import React, {ChangeEvent, useState} from 'react';
import s from "./ControlledSelect.module.css";

type ItemsType = {
    title: string
    value: any
}

type ControlledSelectProps = {
    value: any
    onChange: (value: any) => any
    items: ItemsType[]
}

const ControlledSelect = (props: ControlledSelectProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const [selectedItem, setSelectedItem] = useState('selected')

    function changeCollapsedStatus() {
        setCollapsed(!collapsed)
    }

    function showCollapsedItems() {
        return props.items.map(item => {
            const onClickHandler = () => {
                setSelectedItem(item.title);
                setCollapsed(false)
            }

            return (

                <div className={s.selectorOptionWrapper}>
                    <div className={s.selectorOption} onClick={onClickHandler}
                         key={item.value}>{item.title} {item.value}</div>
                </div>
            )
        })
    }

    return (
        <div className={s.selectorWrapper}>
            <div className={s.selector} onClick={changeCollapsedStatus}>{selectedItem}
                {collapsed && showCollapsedItems()}
            </div>
        </div>
    );
};

export default ControlledSelect;
