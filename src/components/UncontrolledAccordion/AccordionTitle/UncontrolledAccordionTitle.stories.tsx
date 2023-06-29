
import {Meta, StoryObj} from "@storybook/react";
import React, {useState} from "react";
import AccordionTitle from "./AccordionTitle";
import {action} from "@storybook/addon-actions";
import { AccordionBody } from "../../Accordion/Accordion";

const meta: Meta<typeof AccordionTitle> = {
    component: AccordionTitle,
};

export default meta;
type Story = StoryObj<typeof AccordionTitle>

const callback = action('clicked')

const ShowUncontrolledAccordionTitle = () => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <AccordionTitle title={"This is Title"} onClick={() => setCollapsed(!collapsed)}/>
    )
        {/*<AccordionBody collapsed={collapsed}/></>)*/}
}


export const ModeChanging: Story = {
    render: () => {
        return <div/>

    },};