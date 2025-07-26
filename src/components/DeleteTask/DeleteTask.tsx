import type { FC, MouseEvent } from 'react';
import { TrashIcon } from '../../icons/TrashIcon';
import { AbsIcon } from '../../styled-components/AbsIcon';

interface DeleteTaskProps {
    onClick: (id: string) => void;
    id: string;
}

const DeleteTask: FC<DeleteTaskProps> = ({ onClick, id }) => {
    const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
        e.stopPropagation(); // Важно для предотвращения случайных кликов по задаче
        onClick(id);
    };

    return (
        <AbsIcon onClick={handleClick} $bottom="0px" $right="5px">
            <TrashIcon />
        </AbsIcon>
    );
};

export default DeleteTask;
