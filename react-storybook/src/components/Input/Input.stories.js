import React from "react";
import Input from "./Input";

export default {
  title: 'Components/Input',
  component:Input
}

export const Small = () => {
  return <Input variant="small" />
}
export const Medium = () => {
  return <Input variant="medium" />
}
export const Large = () => {
  return <Input variant="large" />
}
export const Number = () => {
  return <Input variant="medium" type="number" />
}
export const Color = () => {
  return <Input variant="small" type="color" id="head" name="head"  />
}
export const Date = () => {
  return <Input variant="medium" type="date" />
}

Small.storyName = "Small Input"
Medium.storyName = "Medium Input"
Large.storyName = "Large Input"
Number.storyName = "Numeric Input"