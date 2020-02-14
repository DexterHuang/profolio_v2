import * as React from "react";
import { Text } from "../../Text/Text";
import { Color } from "../../../Theme/Color";
import { CodeEnd } from "../CodeEnd/CodeEnd";
import { CodeVariable } from "../CodeVariable/CodeVariable";
import { IVariableType } from "../../../Interface/IVariableType";
interface Props {
  label: string;
  type?: IVariableType;
  value?: string;
  onChange: (text: string) => void;
  maxLength?: number;
  inputType?: "text" | "password"
}
interface States { }
export class CodeInput extends React.Component<Props, States> {
  static defaultProps = {};
  state = {};
  input = React.createRef<HTMLInputElement>();
  render() {
    const {
      type = "const",
      label,
      onChange,
      value,
      maxLength = 64,
      inputType
    } = this.props;

    return (
      <React.Fragment>
        <div
          style={{ display: "inline-flex", flexDirection: "row" }}
          onClick={() => {
            if (this.input.current) {
              this.input.current.focus();
            }
          }}>
          <CodeVariable varName={label}>
            <Text type="string" noMargin>
              "
          </Text>
            <div
              style={{
                flexDirection: "row",
                position: "relative",
                minWidth: 1
              }}>
              <div style={{ opacity: 0, }}>
                {`${value || ''}`.replace(/\s/gm, "_")}
              </div>
              <input
                style={{
                  position: "absolute",
                  caretColor: Color.WHITE,
                  color: Color.STRING,
                  width: "100%"
                }}
                value={value}
                onChange={e => {
                  const v = e.target.value;
                  onChange(v);
                }}
                maxLength={maxLength}
                ref={this.input}
                type={inputType}
              />
            </div>
            <Text type="string">"</Text>
          </CodeVariable>
          <CodeEnd />
        </div>
      </React.Fragment>
    );
  }
}
