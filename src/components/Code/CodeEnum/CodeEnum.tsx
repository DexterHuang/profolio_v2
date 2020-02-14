import * as React from "react";
import { CodeChain } from "../CodeChain/CodeChain";
interface Props {
  enumStr: string;
}
export const CodeEnum: React.FC<Props> = (props: Props) => {
  const { enumStr = "" } = props;
  return (
    <CodeChain type="variable">
      {`${enumStr}`.replace(/\s/gm, '_')}
    </CodeChain>
  );
};
