import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import React from "react";
import TextInput from "./TextInput";

test("render text input form", () => {
  render(
    <TextInput
      id="question"
      label="Question"
      fullWidth={true}
      multiline={true}
      rows={3}
      onChange={() => {}}
      required
    />
  );

  const textarea = screen.getByLabelText("Question");
  user.type(textarea, "test question");
  expect(textarea).toHaveValue("test question");
});
