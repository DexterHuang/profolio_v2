
import * as React from 'react';
import { CodeProgressBar } from '../CodeProgressBar/CodeProgressBar';
import useInterval from "../../../Hook/useInterval";

interface Props {
    startedISO: string;
    duration: number;
    length?: number;
    onDone?: () => any;
}
export const CodeCountdown: React.FC<Props> = (props: Props) => {
    const { startedISO, duration, length = 10, onDone } = props;

    const getCurrent = React.useCallback(() => {
        const started = new Date(startedISO).getTime();
        const end = started + 1000 + (duration * 1000);
        const diff = Math.floor((end - Date.now()) / 1000);
        return diff;
    }, [duration, startedISO]);
    const [current, setCurrent] = React.useState(getCurrent());
    const [done, setDone] = React.useState(false);
    useInterval(() => {
        const diff = getCurrent();
        if (diff >= 0) {
            setCurrent(diff);
        } else if (!done) {
            setDone(true);
            onDone && onDone();
        }
    }, 1000);
    return (
        <CodeProgressBar max={duration} current={current} length={length} reverse />
    );
}
