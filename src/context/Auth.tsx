import { ReactNode, createContext, useContext, useState } from "react";
import { removeToken } from "../helpers/general";

const DEFAULT_USER = {
	blocked: true,
	confirmed: false,
	createdAt: "",
	email: "",
	id: 0,
	provider: "",
	surname: "",
	updatedAt: "",
	username: "",
	workspaceName: "",
};

interface ContextType {
	user: User | null;
	setUser: (data: User) => void;
	isLoading: boolean;
	isAuthenticated: boolean;
	logout: () => void;
}

const AuthContext = createContext<ContextType>({
	user: DEFAULT_USER,
	isLoading: false,
	isAuthenticated: false,
	setUser: () => {},
	logout: () => {},
});

interface Props {
	children: ReactNode;
}

export function useAuth() {
	return useContext(AuthContext);
}

export default function AuthProvider({ children }: Props) {
	const [user, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const updateUser = (data: User) => {
		setUser(data);
		setIsAuthenticated(true);
		setIsLoading(false);
	};

	const logout = () => {
		removeToken("corely");
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{ user, setUser: updateUser, logout, isAuthenticated, isLoading }}
		>
			{children}
		</AuthContext.Provider>
	);
}
