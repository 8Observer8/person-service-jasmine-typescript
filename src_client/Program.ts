import { PersonService } from "./PersonService";
import { Validator } from "./Validator";
import { DataContext } from "./DataContext";
import { Person } from "./Person";

class Program
{
    public static Main(): void
    {
        // Get input elements
        let inputId = document.getElementById("inputId") as HTMLInputElement;
        let inputName = document.getElementById("inputName") as HTMLInputElement;

        // Get the "result" element
        let result = document.getElementById("result") as HTMLSpanElement;

        // Get the btnResult button
        let btnResult = document.getElementById("btnResult") as HTMLButtonElement;

        let validator = new Validator();
        let dataContext = new DataContext();
        let personService = new PersonService(validator, dataContext);

        let person = new Person();

        btnResult.onclick = () =>
        {
            person.Id = parseInt(inputId.value);
            person.Name = inputName.value;
            try
            {
                personService.Save(person);
            } catch (error)
            {
                let e = error as Error;
                result.innerHTML = e.message;
                return;
            }
            console.log("Finaly");
            result.innerHTML = `Person "${person.Name}" with id = ${person.Id} was saved.`;
        };
        
    }
}
window.onload = () => Program.Main();