import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";
import { useState, createContext, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import PendingApproval from "../components/PendingApproval";
import SignIn from "../components/SignIn";
import { auth, db } from "../firebase";

export const fetchOrCreateUser = async () => {
	if (auth.currentUser) {
		let currentUser;
		const snapshot = await db
			.collection("users")
			.doc(auth.currentUser.uid)
			.get();

		if (snapshot.exists) {
			currentUser = {
				id: snapshot.id,
				...snapshot.data(),
			};
		} else {
			currentUser = {
				email: auth.currentUser?.email,
				firstName: auth.currentUser?.displayName?.split?.[0],
				lastName: auth.currentUser?.displayName?.split?.[1],
				dateCreated: Date.now(),
				region: "",
				role: "pending",
			};
			await db
				.collection("users")
				.doc(auth.currentUser.uid)
				.set(currentUser, { merge: true });
		}

		return currentUser;
	}

	return null;
};

export const AuthContext = createContext();

export function AuthProvider({ children }) {
	const [isLoading, setIsLoading] = useState(true);
	const { data, refetch } = useQuery("current-user", async () => {
		return fetchOrCreateUser();
	});

	useEffect(() => {
		auth.onAuthStateChanged(async (authUser) => {
			if (authUser) {
				await refetch();
			}
			setIsLoading(false);
		});
	}, [refetch]);

	const render = () => {
		if (isLoading)
			return (
				<Box
					height='100vh'
					width='100vw'
					display='flex'
					alignItems='center'
					justifyContent='center'
				>
					<CircularProgress color='primary' size={32} />
				</Box>
			);
		if (!data) return <SignIn />;
		if (data?.role === "pending") return <PendingApproval />;
		return children;
	};
	return <AuthContext.Provider>{render()}</AuthContext.Provider>;
}
