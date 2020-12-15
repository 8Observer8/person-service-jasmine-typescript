import { IPerson } from "./IPerson";

export class Person implements IPerson
{
    private _name: string;
    public get Name(): string
    {
        return this._name;
    }
    public set Name(v: string)
    {
        this._name = v;
    }

    private _id: number;
    public get Id(): number
    {
        return this._id;
    }
    public set Id(v: number)
    {
        this._id = v;
    }
}