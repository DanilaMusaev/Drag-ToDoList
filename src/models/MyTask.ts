export interface MyTask {
    id: string;
    text: string;
    status: 'todo' | 'inProgress' | 'done';
    position: number;
}
