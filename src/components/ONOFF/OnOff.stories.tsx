import {Meta, StoryObj} from "@storybook/react";
import OnOff from "./OnOff";
import {useState} from "react";

const meta: Meta<typeof OnOff> = {
    component: OnOff,
};

export default meta;
type Story = StoryObj<typeof OnOff>;

const OnOffButton = () => {
    const [value, setValue] = useState(false)
    return <OnOff lightStatus={value} setLightStatus={setValue}/>
}

export const OnMode = () => <OnOff lightStatus={true} setLightStatus={x=>x}/>
export const OffMode = () => <OnOff lightStatus={false} setLightStatus={x=>x}/>

export const ModeChanging: Story = {
    render: () => {
        return <OnOffButton />

    },};