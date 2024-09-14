import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages:{
        signIn: "/",
    },

})

export const config = {
    matcher:[
        
        "/admins/:path*",
        "/users/:path*"
    ],
}