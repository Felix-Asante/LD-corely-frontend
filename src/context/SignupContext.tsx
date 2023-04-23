import React, { ReactNode, createContext, useContext, useState } from "react";

const DEFAULT_USER_INFO = {
	workspaceName: "",
	email: "",
};

interface User {
	workspaceName: string;
	email: string;
}

interface ContextType extends User {
	updateUserInfo: (data: Partial<User>) => void;
}

const SignUpContext = createContext<ContextType>({
	...DEFAULT_USER_INFO,
	updateUserInfo: () => {},
});

export function useSignUpContext() {
	return useContext(SignUpContext);
}

export default function SignUpProvider({ children }: { children: ReactNode }) {
	const [userInfo, setUserInfo] = useState(DEFAULT_USER_INFO);

	const updateUserInfo = (data: Partial<typeof userInfo>) =>
		setUserInfo((info) => ({ ...info, ...data }));

	return (
		<SignUpContext.Provider value={{ ...userInfo, updateUserInfo }}>
			{children}
		</SignUpContext.Provider>
	);
}
