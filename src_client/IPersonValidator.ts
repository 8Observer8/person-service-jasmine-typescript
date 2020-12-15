import { IPerson } from "./IPerson";

export interface IPersonValidator
{
    isValid(person: IPerson): boolean;
}
