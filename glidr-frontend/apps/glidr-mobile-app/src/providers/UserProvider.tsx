import {
    createContext,
    ReactNode,
    useContext,
    useMemo,
    useState,
} from "react";

import { User } from "@/types/user";

interface UserContextType {

    user: User | null;

    updateUser: (
        updates: Partial<User>
    ) => void;

    logout: () => void;

}

const UserContext = createContext<UserContextType | undefined>(
    undefined
);

interface Props {
    children: ReactNode;
}

export function UserProvider({
    children,
}: Props) {

    // Temporary mock user.
    // Later this will come from your backend after login.
    const [user, setUser] = useState<User | null>({

        id: "1",

        firstName: "Henry",

        lastName: "Olaitan",

        email: "henry@gmail.com",

        phone: "+2348012345678",

        avatar: "",

    });

    function updateUser(
        updates: Partial<User>
    ) {

        setUser(previous => {

            if (!previous) {
                return previous;
            }

            return {

                ...previous,

                ...updates,

            };

        });

    }

    function logout() {

        setUser(null);

    }

    const value = useMemo(() => ({

        user,

        updateUser,

        logout,

    }), [user]);

    return (

        <UserContext.Provider value={value}>

            {children}

        </UserContext.Provider>

    );

}

export function useUser() {

    const context = useContext(UserContext);

    if (!context) {

        throw new Error(
            "useUser must be used inside UserProvider."
        );

    }

    return context;

}