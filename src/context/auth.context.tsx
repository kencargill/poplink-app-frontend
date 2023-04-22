import { createContext, useState } from "react";
import { User } from "../types/user.types";

interface AuthContextModule {
    user: User | null;
    setUser: (user: User) => void;
}

export const AuthContext = createContext<AuthContextModule>({
    user: null,
    setUser: () => {},
});

interface Props {
    children: React.ReactNode;
}

export function AuthContextProvider({ children }: Props) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children }
        </AuthContext.Provider>
    )
}