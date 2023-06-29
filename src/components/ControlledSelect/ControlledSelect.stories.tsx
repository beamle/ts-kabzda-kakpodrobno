import {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import ControlledSelect from "./ControlledSelect";

const meta: Meta<typeof ControlledSelect> = {
    component: ControlledSelect,
};

export default meta;
type Story = StoryObj<typeof ControlledSelect>;

const ShowControlledSelect = () => {
    const [value, setValue] = useState(false)
    return <button></button>
    // return <ControlledSelect />
}


export const ModeChanging: Story = {
    render: () => {
        return <ShowControlledSelect/>

    },};