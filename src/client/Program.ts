import { Class1 } from "./Class1";
import { Class2 } from "./Class2";

class Program
{
    public static Main(): void
    {
        let instance1 = new Class1();
        let instance2 = new Class2();

        console.log(instance1.Name);
        console.log(instance2.Name);
    }
}

// Debug Version
Program.Main();

// Release Version
// window.onload = () => Program.Main();
