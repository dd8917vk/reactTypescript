export interface Person {
    firstName: string;
    lastName: string;
}
//declare interface props that the component will accept
export interface Props {
    text?: string;
    ok?: boolean;
    id?: number;
    fn?: ()=> string;
    person: Person;
}

export interface Node {
    text: object;
}
