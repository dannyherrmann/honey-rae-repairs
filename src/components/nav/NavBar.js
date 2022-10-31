import { EmployeeNav } from "./EmployeeNav";
import { CustomerNav } from "./CustomerNav";

export const NavBar = () => {

    const localHoneyUser = localStorage.getItem("honey_user");
    const honeyUserObject = JSON.parse(localHoneyUser);

    if (honeyUserObject.staff) {
        return <EmployeeNav />
        //Return employee nav
    }
    else {
        return <CustomerNav />
        //Return customer nav
    }

}

