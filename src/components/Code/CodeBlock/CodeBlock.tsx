import * as React from "react";
import { Text } from "../../Text/Text";
import { CodeLine } from "../CodeLine/CodeLine";
import { CodeEnd } from "../CodeEnd/CodeEnd";
import { IndentContext } from "../../../Context/IndentContext";
import { ICodeSyntax } from "../../../Interface/ICodeSyntax";
import { CodeIndent } from "../CodeIndent/CodeIndent";
import { ReactComponent as EllipsisIcon } from '../../../Icons/ellipsis.svg';
import { Spinner } from "../../Spinner/Spinner";
interface Props {
  children?: any;
  after?: any;
  codeSyntax?: ICodeSyntax;
  openTag?: string;
  closeTag?: string;
  showLoading?: boolean;
}
export const CodeBlock: React.FC<Props> = (props: Props) => {
  const { children, showLoading, after, codeSyntax = "symbol", openTag = "{", closeTag = "}" } = props;
  return (
    <React.Fragment>
      <Text type={codeSyntax}>{openTag}</Text>
      {!children && <EllipsisIcon style={{ transform: "translateY(3px) scale(0.9)", fillOpacity: 0.7 }} />}
      <CodeLine />
      <CodeIndent>
        {children}
      </CodeIndent>
      <CodeLine >
        <Text type={codeSyntax}>{closeTag}</Text>
        {after}
        {(showLoading) && <Spinner />}
      </CodeLine>
    </React.Fragment>
  );
};
