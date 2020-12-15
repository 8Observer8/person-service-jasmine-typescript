import { IPersonValidator } from "./IPersonValidator";
import { IPerson } from "./IPerson";

export class Validator implements IPersonValidator
{
    isValid(person: IPerson): boolean
    {
        return person.Name !== "Durak";
    }
}