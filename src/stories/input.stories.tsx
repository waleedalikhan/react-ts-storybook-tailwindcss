import React from "react";
import { Input } from "../components/input";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";

export default {
    title: "Input",
    decorators: [withKnobs],
};

export const primary = () => {
    const label = text("Label", "My Label");
    const placeholder = text("Placeholder", "Placeholder")
    const type = select(
        "Type",
        ["text", "password", "number"],
        "text"
    );
    const borderColor = select(
        "Border Color",
        ["primary", "danger", "warning", "info", "secondary"],
        "primary"
    )
    const labelColor = select(
        "Label Color",
        ["primary", "danger", "warning", "info", "secondary"],
        "primary"
    )
    const inputWidth = select(
        "Input Width",
        ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"],
        "100%"
    )

    const disabled = boolean("Disabled", false);

    return (
        <Input
            onInputChange={action("changed")}
            inputIsDisabled={disabled}
            inputLabel={label}
            inputBorderColor={borderColor}
            type={type}
            inputLabelColor={labelColor}
            inputPlaceholder={placeholder}
            inputWidth={inputWidth}
        />
    );
};
