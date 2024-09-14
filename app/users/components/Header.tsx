import getCurrentUser from "@/app/actions/users/getCurrentUser";

import Navbar from "./Navbar";

const Header = async () => {



    
    const user = await getCurrentUser()

    



    return (
        


        <Navbar user={user}/>
    )
}

export default Header