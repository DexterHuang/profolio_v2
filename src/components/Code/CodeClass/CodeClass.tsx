import * as React from "react";
import { Text } from "../../Text/Text";
import { CodeBlock } from "../CodeBlock/CodeBlock";
import { CodeLine } from "../CodeLine/CodeLine";
import { CodeVariable } from "../CodeVariable/CodeVariable";
import { CodeEnum } from "../CodeEnum/CodeEnum";
import { CodeEnd } from "../CodeEnd/CodeEnd";
interface Props {
  name: string;
  children?: any;
  extend?: string;
  variables?: { [key: string]: string };
}
export const CodeClass: React.FC<Props> = (props: Props) => {
  const { name, children, extend, variables = {} } = props;
  return (
    <React.Fragment>
      <Text type="keyword">export</Text>
      <Text type="declaration">class</Text>
      <Text type="interface">{name}</Text>
      {extend && (
        <React.Fragment>
          <Text type="declaration">extends</Text>
          <Text type="interface">{extend}</Text>
        </React.Fragment>
      )}
      <CodeBlock>
        {Object.entries(variables).map(([key, value]) => {
          return (
            <CodeLine key={key}>
              <CodeVariable varName={key}>
                {`${value}`.indexOf(".") < 0 && <Text type="string">"{value}"</Text>}
                {`${value}`.indexOf(".") >= 0 && <CodeEnum enumStr={value} />}
              </CodeVariable>
              <CodeEnd />
            </CodeLine>
          );
        })}
        {children}
      </CodeBlock>
    </React.Fragment>
  );
};
