import {Meta, StoryObj} from "@storybook/react";
import ControlledSelect from "./ControlledSelectDm";
import ControlledSelectDm from "./ControlledSelectDm";
import {action} from "@storybook/addon-actions";
import {useState} from "react";
const meta: Meta<typeof ControlledSelect> = {
    component: ControlledSelect,
};

export default meta;
type Story = StoryObj<typeof ControlledSelect>;

const ShowControlledSelect = () => {
    const [selectedItemValue, setSelectedItemValue] = useState('1')
    return <ControlledSelectDm selectedItemValue={selectedItemValue} setSelectedItemValue={setSelectedItemValue}
                             items={[
                                 {value: '1', title: 'Tallinn'},
                                 {value: '2', title: 'Helsinki'},
                                 {value: '3', title: 'Warsaw'}]}></ControlledSelectDm>
}

const ShowControlledSelectWithoutValue = () => {
    const [selectedItemValue, setSelectedItemValue] = useState(null)
    return <ControlledSelectDm setSelectedItemValue={setSelectedItemValue}
                               selectedItemValue={selectedItemValue}
                             items={[
                                 {value: '1', title: 'Tallinn'},
                                 {value: '2', title: 'Helsinki'},
                                 {value: '3', title: 'Warsaw'}]}></ControlledSelectDm>
}



export const WithValue: Story = {
    render: () => {
        return <ShowControlledSelect/>

    },};

export const WithoutValue: Story = {
    render: () => {
        return <ShowControlledSelectWithoutValue/>

    },};