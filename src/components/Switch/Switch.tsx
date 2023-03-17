import React from "react";
import "./Switch.css";

interface ToggleSwitchProps {
  commentsStage: boolean;
  changeStage: (callback: (value: Card) => Card) => void;
  id: string;
}

function ToggleSwitch({
  changeStage,
  id,
  commentsStage,
}: ToggleSwitchProps): JSX.Element {
  const [checked, setChecked] = React.useState<boolean>(true);

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    changeStage((prevState: Card) => {
      return { ...prevState, post: checked };
    });
    setChecked(checked);
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="tooglleSwitch"
        id={id}
        onChange={(e) => {
          changeHandler(e);
        }}
        checked={checked}
      />
      <label className="toggle-switch-label" htmlFor={id}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
}

export default ToggleSwitch;
