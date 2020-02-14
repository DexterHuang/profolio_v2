import * as React from 'react';
import { Color } from '../../../Theme/Color';
import css from "./CodeToolTip.module.scss";

interface Props {
    tip: () => React.ReactElement;
    clickToShow?: boolean;
    onClick?: () => any;
}
interface States {
    hovered: boolean;
    showTip: boolean;
}
export class CodeToolTip extends React.Component<Props, States> {
    static defaultProps = {};
    state = { hovered: false, showTip: false };
    ref: HTMLDivElement;
    componentDidMount() {
    }
    onLeave = (() => {
        const { hovered, showTip } = this.state;
        if (hovered) {
            this.setState({ hovered: false });
        }
        if (showTip) {
            this.setState({ showTip: false });
        }
    }).bind(this);
    onEnter = (() => {
        this.setState({ hovered: true });
        setTimeout(() => {
            if (this.state.hovered) {
                this.setState({ showTip: true });
            }
        }, 500);
    }).bind(this);
    onClick = (() => {
        const { clickToShow, onClick } = this.props;
        const { showTip } = this.state;
        if (onClick) {
            onClick();
        } else if (clickToShow && !showTip) {
            this.setState({ showTip: true });
        }
    }).bind(this);
    render() {
        const { children, tip } = this.props;
        const { hovered, showTip } = this.state;
        let top = undefined;
        let bottom = undefined;
        if (hovered && this.ref) {
            const rect = this.ref.getBoundingClientRect();
            if (rect.top < 256) {
                top = this.ref.clientHeight;
            } else {
                bottom = this.ref.clientHeight;
            }
        }
        return (
            <div style={{ display: "inline-flex", position: "relative" }} onMouseLeave={this.onLeave} ref={ref => this.ref = ref}>
                <div style={{ userSelect: "none", cursor: "pointer", flexDirection: "row" }} onMouseEnter={this.onEnter} onClick={this.onClick}>
                    {children}
                </div>
                {hovered && showTip && <div className={css.toolTip} style={{
                    position: "absolute", zIndex: 1,
                    backgroundColor: Color.PRIMARY_DARK,
                    border: `1px solid ${Color.PRIMARY_LIGHT}`,
                    bottom, top
                }} onClick={this.onLeave}>
                    {tip()}
                </div>}
            </div>
        );
    }
} 