import {
    createContext,
    useState,
    ReactNode,
} from "react";

import { UserResponse } from "@/services/authService";

interface UserContextType {

    user: UserResponse | null;

    setUser: (
        user: UserResponse | null
    ) => void;

}

export const UserContext =
    createContext<UserContextType | null>(null);

interface Props {

    children: ReactNode;

}

export function UserProvider({
    children,
}: Props) {

    const [user, setUser] =
        useState<UserResponse | null>(null);

    return (

        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </UserContext.Provider>

    );

}