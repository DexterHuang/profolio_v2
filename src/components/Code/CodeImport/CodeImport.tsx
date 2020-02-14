import * as React from "react";
import { Text } from "../../Text/Text";
import { CodeEnd } from "../CodeEnd/CodeEnd";
import { CodeLine } from "../CodeLine/CodeLine";
import { Config } from "../../../Config/Config";


interface Props {
  imports: string[];
  from: string;
}
export const CodeImport: React.FC<Props> = (props: Props) => {
  const { imports, from } = props;
  return (
    <React.Fragment>
      <CodeLine>
        <Text type="keyword">import</Text>
        <Text type="symbol">{"{"}</Text>
        {imports.map((item, i) => {
          const hasNext = i !== imports.length - 1;
          return (

            <React.Fragment key={i}>
              <Text type="variable" noMargin={hasNext}>
                {item}
              </Text>
              {hasNext && <Text type="symbol">,</Text>}
            </React.Fragment>
          );
        })}
        <Text type="symbol">{"}"}</Text>
        <Text type="keyword">from</Text>
        <Text type="string">"{Config.GLOBAL_PACKAGE_NAME}{from}"</Text>
        <CodeEnd />
      </CodeLine>
    </React.Fragment>
  );
};
