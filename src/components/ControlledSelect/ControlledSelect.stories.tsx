import {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import ControlledSelect from "./ControlledSelect";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof ControlledSelect> = {
    component: ControlledSelect,
};

export default meta;
type Story = StoryObj<typeof ControlledSelect>;

const ShowControlledSelect = () => {
    return <ControlledSelect value={'2'} onChange={action('Value changed')}
                             items={[
                                 {value: '1', title: 'Tallinn'},
                                 {value: '2', title: 'Helsinki'},
                                 {value: '3', title: 'Warsaw'}]}></ControlledSelect>
}

const ShowControlledSelectWithoutValue = () => {
    return <ControlledSelect onChange={action('Value changed')}
                             items={[
                                 {value: '1', title: 'Tallinn'},
                                 {value: '2', title: 'Helsinki'},
                                 {value: '3', title: 'Warsaw'}]}></ControlledSelect>
}



export const WithValue: Story = {
    render: () => {
        return <ShowControlledSelect/>

    },};

export const WithoutValue: Story = {
    render: () => {
        return <ShowControlledSelectWithoutValue/>

    },};