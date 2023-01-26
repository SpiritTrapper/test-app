import { PureComponent } from "react";
import RadioButton, { RadioButtonProps } from "./RadioButton";
import styled from "styled-components";

type EntriesList = Array<
  Pick<RadioButtonProps, "id" | "isChecked" | "name" | "icon">
>;

interface Props {
  list: EntriesList;
  onChange: (currentBtnId: string) => void;
}

export default class RadioGroup extends PureComponent<Props> {
  state = {
    options: this.props.list,
  };

  checkRadioButton = (radioId: string): void => {
    const options = this.props.list.map((option) => ({
      ...option,
      isChecked: option.id === radioId,
    }));

    this.setState({
      options,
    });

    this.props.onChange(radioId);
  };

  render() {
    return (
      <Wrapper>
        {this.state.options.map(({ id, name, icon, isChecked }) => (
          <RadioButton
            key={id}
            id={id}
            name={name}
            icon={icon}
            onChange={this.checkRadioButton}
            isChecked={isChecked}
          />
        ))}
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
`;
