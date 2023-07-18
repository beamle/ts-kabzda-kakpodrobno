import React, {KeyboardEvent, useMemo, useState} from 'react';
import s from "../ControlledSelectDm/ControlledSelectDm.module.css";
// memo for selector
// differents filtration
// 1s -> cities with 'm'
// 2s -> cities of specifc country
// 3s ->  people > 10m

type ItemsType = {
    country: string
    title: string
    value: any
}

type UseMemoPropsType = {
    selectedItemValue?: any
    setSelectedItemValue: (value: any) => any
    items: ItemsType[]
    // counter: number
    // setCounter: (counter: number) => void
}

const UseMemo = (props: UseMemoPropsType) => {
    const [collapsed, setCollapsed] = useState(false);
    const [hoveredElValue, setHoveredElValue] = useState(props.selectedItemValue);

    const isSelectedItem = props.items.find(item => item.value === props.selectedItemValue)
    const hoveredItem = props.items.find(item => item.value === hoveredElValue)

    function changeCollapsedStatus() {
        setCollapsed(!collapsed)
    }
    console.log('useMemo rendered')
    function onKeyUp(e: KeyboardEvent<HTMLDivElement>) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElValue) {
                    const nextElementSelection = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    console.log("hovered: ", hoveredElValue, "value", props.items[i].value, "inside of function")
                    if (nextElementSelection) {
                        props.setSelectedItemValue(nextElementSelection.value);
                        setHoveredElValue(nextElementSelection.value);
                        break
                    }
                }
            }
        }
    }

    return (
        <div className={s.selectorWrapper} onKeyUp={onKeyUp}
             tabIndex={0}>
            <span className={s.selector} onClick={changeCollapsedStatus}>
                {isSelectedItem && isSelectedItem.title} {collapsed ? '▲' : '▼'}</span>
            {/*<span><button onClick={() => {*/}
            {/*    props.setCounter(props.counter + 1);*/}
            {/*    console.log('pressed')*/}
            {/*}}>Add counter</button></span>*/}
            {collapsed && props.items.map(item => (
                    <div className={s.selectorOption + ' ' + (item === hoveredItem ? s.selected : '')}
                         key={item.value}
                         onClick={() => props.setSelectedItemValue(item.value)}
                         onMouseEnter={() => setHoveredElValue(item.value)}
                    >
                        {item.title} {item.value}
                    </div>
                )
            )
            }
        </div>
    );
};
const UseMemoMemorized = React.memo(UseMemo)
export default UseMemoMemorized;