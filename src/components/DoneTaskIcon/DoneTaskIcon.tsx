import { SuccessIcon } from '../../icons/SuccessIcon';
import { AbsIcon } from '../../styled-components/AbsIcon';

const DoneTaskIcon = () => {
    return (
        <AbsIcon $top='9px' $left='4px'>
            <SuccessIcon />
        </AbsIcon>
    );
};

export default DoneTaskIcon;
