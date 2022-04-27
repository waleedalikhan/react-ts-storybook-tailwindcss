import React from "react";
import { Button } from "../components/button";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withKnobs],
};

export const primary = () => {
  const label = text("Label", "My Label");
  const type = select(
    "Type",
    ["primary", "secondary", "info", "warning", "danger"],
    "primary"
  );

  const disabled = boolean("Disabled", false);

  return (
    <Button
      onClick={action("clicked")}
      disabled={disabled}
      label={label}
      type={type}
    />
  );
};
