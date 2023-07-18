import {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import React, {useCallback, useMemo, useState} from "react";
import UseMemoMemorized from "./UseMemo";

const meta: Meta<typeof UseMemoMemorized> = {
    component: UseMemoMemorized,
};

export default meta;
type Story = StoryObj<typeof UseMemoMemorized>;

// type FilterType = ">10m" |
const Counter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const ShowControlledSelect = () => {
    console.log('in showcontrollSelect')
    const [selectedItemValue, setSelectedItemValue] = useState('1')
    const [counter, setCounter] = useState(1)
    const [arr, setArr] = useState([
        {country: 'Estonia', value: '1', title: 'Tallinn', people: 500000},
        {country: 'Estonia', value: '1', title: 'Pärnu', people: 200000},
        {country: 'Estonia', value: '1', title: 'Tartu', people: 202300},
        {country: "Latvia", value: '2', title: 'Riga', people: 608000},
        {country: "Latvia", value: '2', title: 'Jelgaiva', people: 30000},
        {country: "Latvia", value: '2', title: 'Orge', people: 100000},
        {country: "Lithuania", value: '3', title: 'Vilnius', people: 800000},
        {country: "Lithuania", value: '3', title: 'Kaudas', people: 100000},
        {country: "Lithuania", value: '3', title: 'Jonava', people: 200000}
    ])

    let filter1 = useMemo(() => {
        return arr.filter(el => el.country === 'Estonia')
    }, [arr])

    let filter2 =  useMemo(() => {
        return arr.filter(el => el.people > 500000)
    }, [arr])
    let filter3 = useMemo(() => {
        return arr.filter(el => el.title.includes('i'))
    }, [arr])

    const setSelected = useCallback(() => {
        return setSelectedItemValue
    }, [])


    return (<>
        <button onClick={() => setCounter(counter + 1)}>add</button>
        <UseMemoMemorized selectedItemValue={selectedItemValue} setSelectedItemValue={setSelected}
                          items={filter1}></UseMemoMemorized>
        <UseMemoMemorized selectedItemValue={selectedItemValue} setSelectedItemValue={setSelected}
                          items={filter2} ></UseMemoMemorized>
        <UseMemoMemorized selectedItemValue={selectedItemValue} setSelectedItemValue={setSelected}
                          items={filter3}></UseMemoMemorized>
        <Counter count={counter}/> </>)
}



export const WithValue: Story = {
    render: () => {
        return <ShowControlledSelect/>

    },
};