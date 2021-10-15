import { CircularProgress, List } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/system";
import useAdminActivitiesContext from "../hooks/general/useAdminActivitiesContext";
import useI18nContext from "../hooks/general/useI18nContext";
import EmptyState from "./EmptyState";
import UserActivityListItem from "./UserActivityListItem";

export default function ActivitiesList() {
	const { data, isLoading, refetch, isFetching } = useAdminActivitiesContext();
	const { t } = useI18nContext();

	return (
		<>
			<List>
				{isLoading && (
					<Box py={4} display='flex' justifyContent='center'>
						<CircularProgress size={24} />
					</Box>
				)}
				{!isLoading && data?.length === 0 && (
					<EmptyState primary={t?.usersEmptyStateContainer} />
				)}
				{!isLoading &&
					data?.length > 0 &&
					data?.map((doc) => (
						<UserActivityListItem activityId={doc?.id} key={doc?.id} />
					))}
			</List>
			<Box py={2} display='flex' justifyContent='center'>
				<LoadingButton loading={isFetching} onClick={refetch}>
					{t?.loadMore}
				</LoadingButton>
			</Box>
		</>
	);
}
