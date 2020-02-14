import * as React from 'react';
import { useObserver } from 'mobx-react-lite';
import MAIN_STORE from '../../../Store/MainStore';
import { CodeComment } from '../CodeComment/CodeComment';
import { CodeCountdown } from '../CodeCountdown/CodeCountdown';
import { Text } from '../../Text/Text';
import { CodeLine } from '../CodeLine/CodeLine';
import { CodeSimpleVar } from '../CodeSimpleVar/CodeSimpleVar';
import { CodeEnum } from '../CodeEnum/CodeEnum';
import { shortId } from '../../../SharedLib/Helper/GeneralHelper';

interface Props {

}
export const CodePlayerStatus: React.FC<Props> = (props: Props) => useObserver(() => {
    const { } = props;
    const player = MAIN_STORE.getPlayer();
    if (!player) {
        return null;
    }
    const status = player.getStatus();
    const text = React.useMemo(() => {
        const text = status.getAction().getRandomText(status.startTime);
        return text;
    }, [status]);
    return (<React.Fragment>
        <CodeComment children={[
            ...text.split(/\./gm).map(t => <Text type="comment" key={t}>{t}</Text>),
            status.hasDuration() && <CodeCountdown startedISO={status.startTime} duration={status.getDuration()} key={1} />
        ]} />
        <CodeSimpleVar varName="status">
            <CodeEnum enumStr={`PlayerStatus.${status.toString()}`} />
        </CodeSimpleVar>
    </React.Fragment>
    );
}); 