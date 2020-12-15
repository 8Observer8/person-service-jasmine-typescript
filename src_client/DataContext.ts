import { IDataContext } from "./IDataContext";
import { IPerson } from "./IPerson";

export class DataContext implements IDataContext
{
    savePerson(person: IPerson): void
    {
        console.log(`Person with name "${person.Name}" was saved.`);
    }
}
