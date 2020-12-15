import { IPerson } from "./IPerson";

export interface IDataContext
{
    savePerson(person: IPerson): void;
}
