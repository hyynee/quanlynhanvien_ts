import { db } from '@/lib/db';

import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';



const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials, req) {
                if (!credentials?.email && !credentials?.password) {
                    throw new Error('Invalid Credentials');
                }

                const user = await db.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user || !user.password) {
                    throw new Error('Invalid Credentials');
                }

               

                
                if(user.password === credentials.password){
                    return user;
                }


                return null;

                
            },
        })
    ],
    debug: process.env.NODE_ENV === 'development',
    session:{
        strategy:'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
};


const handler = NextAuth(authOptions)

export  { handler as GET, handler as POST}