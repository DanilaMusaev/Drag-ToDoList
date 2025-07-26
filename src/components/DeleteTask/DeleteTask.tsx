import { TrashIcon } from '../../icons/TrashIcon';
import { AbsIcon } from '../../styled-components/AbsIcon';

const DeleteTask = () => {
    return (
        <AbsIcon $bottom="0px" $right="5px">
            <TrashIcon />
        </AbsIcon>
    );
};

export default DeleteTask;
