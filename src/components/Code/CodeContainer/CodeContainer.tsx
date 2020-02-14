import * as React from "react";
interface Props {
  children?: any;
  style?: React.CSSProperties;
  ref?: any;
}
export const CodeContainer: React.FC<Props> = (props: Props) => {
  const { children, style, ref } = props;
  return (<div style={{
    flex: 1,
    position: "relative", ...style
  }} ref={ref}>
    <div className="custom-scroll" style={{
      position: "absolute",
      overflow: "auto",
      height: "100%", width: "100%",
    }}>
      <div style={{
        display: "block", whiteSpace: "nowrap",
        padding: "16px 0 128px 32px"
      }}>
        {children}
      </div>
    </div>
  </div>
  );
};
