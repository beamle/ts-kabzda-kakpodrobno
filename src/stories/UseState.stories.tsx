import {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import UseMemoMemorized from "../components/useMemo/UseMemo";

const meta: Meta<typeof UseMemoMemorized> = {
    component: UseMemoMemorized,
};

export default meta;
type Story = StoryObj<typeof UseMemoMemorized>;

// type FilterType = ">10m" |

const Example1 = () => {
    const [counter, setCounter]  =useState(0)

    useEffect(() => {})
    return ( <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>)
}



export const RenderedComponent: Story = {
    render: () => {
        return <Example1/>

    },
};