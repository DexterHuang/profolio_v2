import * as React from "react";
import { IndentContext } from "../../../Context/IndentContext";

interface Props {
  children?: any;
  noNewLine?: boolean;
  noIndent?: boolean;
}
export const CodeLine: React.FC<Props> = (props: Props) => {
  const { children, noNewLine, noIndent } = props;
  return (
    <IndentContext.Consumer>
      {({ indent }) => (<React.Fragment>
        {children && !noIndent && <p style={{ width: indent }} />}
        {children}
        {!noNewLine && <br />}
      </React.Fragment>
      )}
    </IndentContext.Consumer>
  );
};
