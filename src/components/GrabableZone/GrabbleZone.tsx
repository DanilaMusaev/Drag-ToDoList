import type { FC } from 'react';
import { DotsIcon } from '../../icons/DotsIcon';
import type { MyTask } from '../../models/MyTask';
import { AbsIcon } from '../../styled-components/AbsIcon';

interface GrabbleZoneProps {
    $taskStatus: MyTask['status'];
}

const GrabbleZone: FC<GrabbleZoneProps> = ({ $taskStatus }) => {
    return (
        <AbsIcon $left="5px" $top="10px">
            <DotsIcon $isDone={$taskStatus === 'done'} />
        </AbsIcon>
    );
};

export default GrabbleZone;
