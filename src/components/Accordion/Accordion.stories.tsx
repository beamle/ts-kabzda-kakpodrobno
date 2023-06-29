import {Meta, StoryObj} from "@storybook/react";
import {useState} from "react";
import Accordion, {AccordionProps} from "./Accordion";
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof Accordion> = {
    component: Accordion,
    // argTypes: { onClick: { action: 'clicked' } },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// const Template = (args: AccordionProps) => <Accordion {...args}/>


// const message = action("click")

// export const CollapsedAccordion = () => <Accordion title={'Collapsed'} collapsed={true} onClick={message}/>
// export const UncollapsedAccordion = () => <Accordion title={'Uncollapsed'} collapsed={false} onClick={message}/>
const onClickSelect = action("accordion mode change event fired!")

const ChangedAccordion = () => {
    const [value, setValue] = useState(false)
    return <Accordion title={'Controlable Accordion'} collapsed={value} onClick={setValue}
                      items={[{title: 'Banan', value: 1},{title: 'Orange', value: 2}, {title: 'Strawberries', value: 33}]}
                      onClickSelect={(value) => alert(`users value is: ${value}`)}/>
}

export const ModeChanging: Story = {
    render: () => {
        return <ChangedAccordion />

    },};