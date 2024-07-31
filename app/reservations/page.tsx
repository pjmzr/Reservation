import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import ReservationsClient from "./ReservationsClient";


const ResevationsPage = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="Please login"
      />
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations"
        subtitle="Looks like you have no reservations on your properties"
      />
    );
  }

  return (
    <ReservationsClient
      reservations={reservations}
      currentUser={currentUser}
    />
  )
}
 
export default ResevationsPage;