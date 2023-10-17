import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  // SORT
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = { field, direction };

  // PAGINATION
  const page = +searchParams.get("page") || 1;

  const {
    isLoading,
    data: { data: bookings, count } = { data: null, count: 0 },
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
    onError: () => toast.error("Could not load bookings data"),
  });

  return { isLoading, bookings, count, error };
}
