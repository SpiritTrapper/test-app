import React, { ChangeEvent, FormEvent, PureComponent } from "react";
import styled from "styled-components";
import InputElement, { AppControlTypes } from "./ui/InputElement";
import LineHeightIcon from "./icons/LineHeightIcon";
import LetterSpacingIcon from "./icons/LetterSpacingIcon";
import FontSizeIcon from "./icons/FontSizeIcon";
import RadioGroup from "./ui/RadioGroup";
import { FontFamily, TextAlign, TextColor, TextStyle } from "./customTypings";
import AlignLeftIcon from "./icons/AlignLeftIcon";
import AlignCenterIcon from "./icons/AlignCenterIcon";
import AlignRightIcon from "./icons/AlignRightIcon";
import AlignJustifyIcon from "./icons/AlignJustifyIcon";
import ArrowIcon from "./icons/ArrowIcon";

interface EditorState {
  fontFamily: FontFamily;
  fontStyle: TextStyle;
  fontWeight: TextStyle;
  fontSize: number;
  color: TextColor;
  lineHeight: number;
  letterSpacing: number;
  textAlign: TextAlign;
  text: string;
}

const Wrapper = styled.main`
  display: flex;
  height: 100vh;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const Toolbar = styled.section`
  width: 240px;
  padding: 8px 16px;
  background: var(--white);

  @media (max-width: 992px) {
    order: 1;
    width: 100vw;
  }
`;

const Editor = styled.section`
  display: flex;
  flex: 1 1 70vw;
  height: 100%;
  background: transparent;

  @media (max-width: 992px) {
    order: 2;
    width: 100vw;
  }
`;

const TextArea = styled.textarea<Omit<EditorState, "text">>`
  margin: auto;
  width: 41.7vw;
  min-width: 600px;
  height: 90vh;
  font-size: 14px;
  resize: none;
  border: none;
  background: var(--white);
  outline: none;
  padding: 32px 30px;

  @media (max-width: 992px) {
    order: 2;
    width: 95vw;
    min-width: 95vw;
    height: 50vh;
  }

  ${(props) => `
    font-family: '${props.fontFamily}', sans-serif;
    font-style: ${props.fontStyle};
    font-weight: ${props.fontWeight};
    font-size: ${props.fontSize}px;
    color: ${props.color};
    line-height: ${props.lineHeight}%;
    letter-spacing: ${props.letterSpacing}px;
    text-align: ${props.textAlign};
    
    &::placeholder {
      font-weight: bold;
      font-size: ${props.fontSize}px;
      line-height: ${props.lineHeight}%;
      letter-spacing: 0.3px;
      color: var(--black0);
    }
  `}
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.6px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: flex-start;

  > select {
    border-radius: 4px 0 0 4px;
  }

  .font-size-input {
    width: 115px;

    > input {
      border-radius: 0 4px 4px 0;
      border-left: none;
    }
  }

  .line-height-input {
    position: relative;
    width: 50%;

    > input {
      border-radius: 4px 0 0 4px;
    }

    &::after {
      content: "%";
      position: absolute;
      top: 12px;
      right: 10px;
      font-size: 12px;
      color: var(--grey2);
    }
  }

  .letter-spacing-input {
    width: 50%;

    > input {
      border-radius: 0 4px 4px 0;
      border-left: none;
    }

    &::after {
      content: "px";
      position: absolute;
      top: 12px;
      right: 10px;
      font-size: 12px;
      color: var(--grey2);
    }
  }
`;

const ColorSelect = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  margin-bottom: 10px;

  > select {
    padding-left: 37px;
    font-size: 11px;
    line-height: 0.9;
  }

  > svg {
    position: absolute;
    right: 9px;
    top: 17px;
    cursor: pointer;
    pointer-events: none;
  }
`;

const PickedColor = styled.div`
  position: absolute;
  left: 11px;
  top: 10px;
  z-index: 1;
  width: 18px;
  height: 18px;
  border-radius: 3px;
`;

const SelectWrapper = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  margin-bottom: 10px;

  > svg {
    position: absolute;
    right: 9px;
    top: 17px;
    cursor: pointer;
    pointer-events: none;
  }
`;

const Select = styled.select`
  border: 1px solid var(--grey1);
  border-radius: 4px;
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 0 12px;
  outline: none;
  background: var(--white);
  cursor: pointer;
  appearance: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: var(--green);
  color: var(--white);
  height: 40px;
  font-weight: 700;
  font-size: 13px;
  border: none;
  border-radius: 4px;
  margin-top: 8px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s linear;

  &:hover {
    opacity: 0.85;
  }
`;

export default class TextEditor extends PureComponent {
  private LETTER_SPACING_STEP = 0.1;
  private LINE_HEIGHT_STEP = 1;
  private DEFAULT_FONT_SIZE = 14;
  private DEFAULT_LINE_HEIGHT = 125;
  private DEFAULT_LETTER_SPACING = 0;
  private TEXT_ALIGN_OPTIONS_LIST = [
    {
      id: TextAlign.LEFT,
      isChecked: true,
      name: "text_align",
      icon: <AlignLeftIcon />,
    },
    {
      id: TextAlign.CENTER,
      isChecked: false,
      name: "text_align",
      icon: <AlignCenterIcon />,
    },
    {
      id: TextAlign.RIGHT,
      isChecked: false,
      name: "text_align",
      icon: <AlignRightIcon />,
    },
    {
      id: TextAlign.JUSTIFY,
      isChecked: false,
      name: "text_align",
      icon: <AlignJustifyIcon />,
    },
  ];

  state: EditorState = {
    fontFamily: FontFamily.FIRA,
    fontStyle: TextStyle.NORMAL,
    fontWeight: TextStyle.NORMAL,
    fontSize: this.DEFAULT_FONT_SIZE,
    color: TextColor.BLACK,
    lineHeight: this.DEFAULT_LINE_HEIGHT,
    letterSpacing: this.DEFAULT_LETTER_SPACING,
    textAlign: TextAlign.LEFT,
    text: "",
  };

  handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ text: event.target.value });
  };

  handleChange = (event: ChangeEvent<AppControlTypes>): void => {
    this.setState({
      [event.target.name]: event.target.value,
      fontWeight:
        event.target.value === TextStyle.BOLD
          ? TextStyle.BOLD
          : event.target.name === "fontStyle"
          ? TextStyle.NORMAL
          : this.state.fontWeight,
    });
  };

  onChangeTextAlign = (currentBtnId: string): void => {
    this.setState({ textAlign: currentBtnId as TextAlign });
  };

  onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(this.state));
  };

  componentDidMount() {
    const cachedData = localStorage.getItem("formData");
    if (cachedData) {
      this.setState(JSON.parse(cachedData));
    }
  }

  render() {
    return (
      <Wrapper>
        <Editor>
          <TextArea
            {...this.state}
            value={this.state.text}
            placeholder="Type Here..."
            onChange={this.handleTextChange}
            name="text"
          />
        </Editor>
        <Toolbar>
          <Title>TEXT</Title>
          <form onSubmit={this.onSubmit}>
            <SelectWrapper>
              <Select
                value={this.state.fontFamily}
                onChange={this.handleChange}
                name="fontFamily"
              >
                <option value={FontFamily.FIRA}>{FontFamily.FIRA}</option>
                <option value={FontFamily.ROBOTO}>{FontFamily.ROBOTO}</option>
                <option value={FontFamily.RUBIK}>{FontFamily.RUBIK}</option>
              </Select>
              <ArrowIcon />
            </SelectWrapper>
            <InputGroup>
              <SelectWrapper>
                <Select
                  value={this.state.fontStyle}
                  onChange={this.handleChange}
                  name="fontStyle"
                >
                  <option value={TextStyle.NORMAL}>Normal</option>
                  <option value={TextStyle.BOLD}>Bold</option>
                  <option value={TextStyle.ITALIC}>Italic</option>
                </Select>
                <ArrowIcon />
              </SelectWrapper>
              <InputElement
                type="number"
                value={this.state.fontSize}
                onChange={this.handleChange}
                name="fontSize"
                placeholder="Font size"
                className="font-size-input"
                icon={<FontSizeIcon />}
              />
            </InputGroup>
            <ColorSelect>
              <PickedColor style={{ background: this.state.color }} />
              <Select
                value={this.state.color}
                onChange={this.handleChange}
                name="color"
              >
                <option value={TextColor.BLACK}>{TextColor.BLACK}</option>
                <option value={TextColor.BLUE}>{TextColor.BLUE}</option>
                <option value={TextColor.RED}>{TextColor.RED}</option>
                <ArrowIcon />
              </Select>
              <ArrowIcon />
            </ColorSelect>
            <InputGroup>
              <InputElement
                type="number"
                value={this.state.lineHeight}
                onChange={this.handleChange}
                name="lineHeight"
                step={this.LINE_HEIGHT_STEP}
                placeholder="Line Height"
                icon={<LineHeightIcon />}
                className="line-height-input"
              />
              <InputElement
                type="number"
                value={this.state.letterSpacing}
                onChange={this.handleChange}
                step={this.LETTER_SPACING_STEP}
                name="letterSpacing"
                placeholder="Letter Spacing"
                icon={<LetterSpacingIcon />}
                className="letter-spacing-input"
              />
            </InputGroup>
            <RadioGroup
              onChange={this.onChangeTextAlign}
              list={this.TEXT_ALIGN_OPTIONS_LIST}
            />
            <SubmitButton type="submit">Apply Changes</SubmitButton>
          </form>
        </Toolbar>
      </Wrapper>
    );
  }
}
