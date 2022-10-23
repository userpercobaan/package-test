import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardProduct  from './card-product';

export default {
  title: 'organism/Card Product',
  component: CardProduct,
} as ComponentMeta<typeof CardProduct>;

const Template: ComponentStory<typeof CardProduct> = (args) => <CardProduct {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'NIKE AJ1 Retro High White University Blue',
  discount: 50,
  price: 7400000,
  imgSrc: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-11958284/nike_nike_air_jordan_1_university_blue_full03_oqkkbxoc.jpg'
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'NIKE AJ1 Retro High White University Blue',
  discount: 99,
  price: 7400000,
  type: 'disabled',
  imgSrc: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-11958284/nike_nike_air_jordan_1_university_blue_full03_oqkkbxoc.jpg'
};

export const Small = Template.bind({});
Small.args = {
  title: 'NIKE AJ1 Retro High White University Blue',
  discount: 50,
  price: 7400000,
  size: 'small',
  imgSrc: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-11958284/nike_nike_air_jordan_1_university_blue_full03_oqkkbxoc.jpg'
};

export const SmallDisabled = Template.bind({});
SmallDisabled.args = {
  title: 'NIKE AJ1 Retro High White University Blue',
  discount: 80,
  price: 7400000,
  type: 'disabled',
  size: 'small',
  imgSrc: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-11958284/nike_nike_air_jordan_1_university_blue_full03_oqkkbxoc.jpg'
};

