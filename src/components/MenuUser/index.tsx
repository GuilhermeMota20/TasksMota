import { useState } from "react";
import Divider from "../Utilities/Divider";
import LayoutsMenus from "../Utilities/LayoutMenus";
import AvatarUser from "./AvatarUser";
import ProgressTasks from "./ProgressTasks";

export default function MenuUser() {
    const [showMenuUser, setShowMenuUser] = useState(false);

    const closeMenuUser = () => {
        console.log('click');
        showMenuUser ? false : true; 
    };

    return (
        <LayoutsMenus
            menuOpen={showMenuUser}
            closeMenuHandler={closeMenuUser}
            className="top-0 right-0"
        >
            <AvatarUser />
            <ProgressTasks />
        </LayoutsMenus>
    )
}