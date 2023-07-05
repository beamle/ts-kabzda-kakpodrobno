import React, {ChangeEvent, useState, KeyboardEvent, useEffect} from 'react';
import s from "./ControlledSelect.module.css";

type ItemsType = {
    title: string
    value: any
}

type ControlledSelectProps = {
    value?: any
    onChange: (value: any) => any
    items: ItemsType[]
}

const ControlledSelect = (props: ControlledSelectProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Select city')
    const [hovered, setHovered] = useState('Riga')

    function changeCollapsedStatus() {
        setCollapsed(!collapsed)
    }

    const onClickHandler = (title: string) => {
        setSelectedItem(title);
        setCollapsed(false)
    }

    useEffect(() => {
        // setHovered(props.items)
    }, [])

    function onKeyUp(e: KeyboardEvent<HTMLDivElement>) {
        console.log('press')
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].title === hovered) {
                    const nextElementSelection = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    console.log("hovered: ", hovered, "title", props.items[i].title, "inside of function")
                    if (nextElementSelection) {
                        setSelectedItem(nextElementSelection.title);
                        setHovered(nextElementSelection.title);
                        break
                    }
                }
            }
        }
    }

    // function onKeyUp(e: KeyboardEvent<HTMLDivElement>) {
    //     if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    //         for (let i = 0; i < props.items.length; i++) {
    //             if (props.items[i].title === hovered) {
    //                 const nextIndex = e.key === 'ArrowDown' ? i + 1 : i - 1;
    //                 if (nextIndex >= 0 && nextIndex < props.items.length) {
    //                     setSelectedItem(props.items[nextIndex].title);
    //                     setHovered(props.items[nextIndex].title);
    //                 }
    //                 break;
    //             }
    //         }
    //     }
    // }


    console.log(hovered, 'hovered outside of function')

    function showCollapsedItems() {

        // const [tab,setTab] = useState(item.value)
        return props.items.map(item => {

            return (
                <div autoFocus={true} className={s.selectorOptionWrapper}>
                    <div className={s.selectorOption + ' ' + (item.title === hovered ? s.hovered : '')}
                         onClick={() => onClickHandler(item.title)}
                         onMouseEnter={(event) => {setHovered(item.title); console.log(event.currentTarget.tabIndex)}}
                         tabIndex={0}
                         onKeyUp={onKeyUp}
                         key={item.value}>{item.title} {item.value}</div>
                </div>
            )
        })
    }

    return (
        <div className={s.selectorWrapper}>
            <div className={s.selector} onClick={changeCollapsedStatus}>
                <div className={s.selectorTitle}>
                    {selectedItem} {collapsed ? '▲' : '▼'}
                </div>
                {collapsed && showCollapsedItems()}
            </div>
        </div>
    );
};

export default ControlledSelect;
