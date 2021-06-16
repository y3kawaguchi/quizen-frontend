import { storiesOf } from "@storybook/react";
import React from "react";
import TextInput from "~/src/components/uikit/TextInput";

storiesOf("components/uikit", module).add("TextInput", () => (
  <TextInput
    id="question"
    label="Question"
    fullWidth={true}
    multiline={true}
    rows={3}
    onChange={() => {}}
    required
  />
));
