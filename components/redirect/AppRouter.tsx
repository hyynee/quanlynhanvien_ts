"use client"

import { User } from "@prisma/client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import HomePage from "../../app/(site)/components/Home";
import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

interface AppRouterProps {
    currentUser: User | undefined | null;
}

const AppRouter = ({
    currentUser
}: AppRouterProps) => {
    const [redirecting, setRedirecting] = useState(false); 
    const session = useSession();
    const router = useRouter();

    
    useEffect(() => {
        if (!session) {
            router.push('/authentication');
            setRedirecting(true); 
            return;
        }

        if (!currentUser) {
            setRedirecting(true); 
            return;
        }

        if (session.status === 'authenticated') {
            if (currentUser.role === 'ADMIN') {
                router.push('/admins');
            } else if (currentUser.role === 'GUEST') {
                router.push('/users');
            }
            setRedirecting(true); 
        }
    }, [currentUser, session, router]);

    if (redirecting) {
        return (
            <div className="w-full h-full">
                <HomePage />
            </div>
        );
    }

    return (
        <div className="w-full h-full">
            <HomePage />
        </div>
    );
}

export default AppRouter;
