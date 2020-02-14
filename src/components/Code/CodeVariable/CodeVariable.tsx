import * as React from "react";
import { Text } from "../../Text/Text";
import { CodeEnd } from "../CodeEnd/CodeEnd";
import { IVariableType } from "../../../Interface/IVariableType";

interface Props {
  varName: string;
  children?: any;
  varType?: IVariableType;
  equalSymbol?: "=" | ":";
}
export const CodeVariable: React.FC<Props> = (props: Props) => {
  const { children, varName, varType = "classProp", equalSymbol = "=" } = props;
  return (
    <React.Fragment>
      {(varType === "const" || varType === "let") && <Text type="declaration">{varType}</Text>}
      <Text type="variable" noMargin={equalSymbol === ":"}>{varName}</Text>
      <Text type="symbol">{equalSymbol}</Text>
      {children}
    </React.Fragment>
  );
};
