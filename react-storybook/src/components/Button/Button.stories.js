import React from "react";
import Button from "./Button";
import {actions} from '@storybook/addon-actions'
// import Center from "../Center/Center";

/* export default {
  title: 'Components/Button',
  component: Button,
}; */

export default {
  title: 'Components/Button',
  component: Button,
  //decorators:[story => <Center>{story()}</Center>]
};

export const Default = {
  args: {
    variant:"secondary",
    children: "Default",
  },
  argTypes: { onClick: { action: 'clicked' } },

};

/* export const Primary = () => {
  return <Center><Button variant="primary">Primary</Button></Center>;
};
export const Secondary = () => {
  return <Center><Button variant="secondary">Secondary</Button></Center>;
};
export const Success = () => {
  return <Center><Button variant="success">Success</Button></Center>;
};
export const Danger = () => {
  return <Center><Button variant="danger">Danger</Button></Center>;
}; */

export const Primary = () => {
  return <Button variant="primary" {...actions('onClick','onMouseOver')}>Primary</Button>;
};
export const Secondary = () => {
  return <Button variant="secondary">Secondary</Button>;
};
export const Success = () => {
  return <Button variant="success">Success</Button>;
};
export const Danger = () => {
  return <Button variant="danger">Danger</Button>;
};

export const ConsoleLog = () => {
  return <Button variant="primary" onClick={()=>{console.log('ConsoleLog Clicked')}}>ConsoleLog</Button>;
};