import React, {ChangeEvent, useState, KeyboardEvent, useEffect} from 'react';
import s from "./ControlledSelect.module.css";

type ItemsType = {
    title: string
    value: any
}

type ControlledSelectProps = {
    selectedItem?: any
    setSelectedItem: (value: any) => any
    items: ItemsType[]
}

const ControlledSelect = (props: ControlledSelectProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const [hovered, setHovered] = useState('Riga')

    function changeCollapsedStatus() {
        setCollapsed(!collapsed)
    }

    const onClickHandler = (title: string) => {
        props.setSelectedItem(title);
        setCollapsed(false)
    }

    function onKeyUp(e: KeyboardEvent<HTMLDivElement>) {
        console.log('press')
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].title === hovered) {
                    const nextElementSelection = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    console.log("hovered: ", hovered, "value", props.items[i].title, "inside of function")
                    if (nextElementSelection) {
                        props.setSelectedItem(nextElementSelection.title);
                        setHovered(nextElementSelection.title);
                        return
                    }
                }
            }
        }
        if (e.key === "Enter" || e.key === "Escape") {
            setCollapsed(false)
        }
    }


    console.log(hovered, 'hovered outside of function')

    function showCollapsedItems() {

        // const [tab,setTab] = useState(item.value)
        return props.items.map(item => {

            return (
                <div key={item.value} className={s.selectorOptionWrapper}>
                    <div className={s.selectorOption + ' ' + (item.title === hovered ? s.hovered : '')}
                         onClick={() => onClickHandler(item.title)}
                         onMouseEnter={(event) => {setHovered(item.title);console.log(event.currentTarget.tabIndex)}}
                    >{item.title} {item.value}</div>
                </div>
            )
        })
    }

    return (
        <div className={s.selectorWrapper}  >
            <div className={s.selector} tabIndex={0}
                 onClick={changeCollapsedStatus} onBlur={changeCollapsedStatus} onKeyUp={onKeyUp}>
                <div className={s.selectorTitle} >
                    {props.selectedItem} {collapsed ? '▲' : '▼'}
                </div>
                {collapsed && showCollapsedItems()}
            </div>
        </div>
    );
};

export default React.memo(ControlledSelect);
