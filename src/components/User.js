import { Divider } from "@mui/material";
import { useParams } from "react-router";
import UserActivitiesList from "./UserActivitiesList";
import UserBadges from "./UserBadges";
import UserDetails from "./UserDetails";
import UserHeader from "./UserHeader";
import UserStats from "./UserStats";

export default function User() {
	const { uid } = useParams();

	return (
		<>
			<UserHeader backButton uid={uid} />
			<UserBadges uid={uid} />
			<Divider sx={{ my: 4 }} />
			<UserStats uid={uid} />
			<Divider sx={{ my: 4 }} />
			<UserDetails uid={uid} />
			<Divider sx={{ my: 4 }} />
			<UserActivitiesList uid={uid} />
		</>
	);
}
