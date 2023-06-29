import {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import UncotrolledAccordion from "./UncotrolledAccordion";

const meta: Meta<typeof UncotrolledAccordion> = {
    component: UncotrolledAccordion,
};

export default meta;
type Story = StoryObj<typeof UncotrolledAccordion>;


const ShowUncontrolledAccordion = () => {
    return <UncotrolledAccordion title={"UncontrolledAccordion"}/>
}


export const ModeChanging: Story = {
    render: () => {
        return <div></div>

    },};

