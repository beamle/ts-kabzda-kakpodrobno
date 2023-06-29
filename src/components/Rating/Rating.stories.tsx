// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import Rating, {RatingValueType} from "./Rating";
import {useState} from "react";

const meta: Meta<typeof Rating> = {
    component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;

const ButtonWithHooks = () => {
    const [rating, setRating] = useState<RatingValueType>(0);
    return <Rating onClick={setRating} ratingValue={rating}/>;
};

export const Primary: Story = {render: () => <Rating onClick={() => {}} ratingValue={0}/>,};
export const Rating1: Story = {render: () => <Rating  onClick={()=>{}} ratingValue={1}/>,};
export const Rating2: Story = {render: () => <Rating  onClick={()=>{}} ratingValue={2}/>,};
export const Rating3: Story = {render: () => <Rating  onClick={()=>{}} ratingValue={3}/>,};
export const Rating4: Story = {render: () => <Rating  onClick={()=>{}} ratingValue={4}/>,};
export const Rating5: Story = {render: () => <Rating  onClick={()=>{}} ratingValue={5}/>,};
export const ChangeRating: Story = {
    render: () => {
        return <ButtonWithHooks />

    },};