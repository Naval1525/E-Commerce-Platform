import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchMe, getAuthToken } from "../api/client";

export function ProtectedRoute() {
  const location = useLocation();
  const token = getAuthToken();
  const { isLoading, isError } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: fetchMe,
    enabled: Boolean(token),
    retry: false
  });

  if (!token) {
    return <Navigate replace state={{ from: location.pathname }} to="/login" />;
  }

  if (isLoading) {
    return (
      <main className="page shell">
        <div className="status-view">
          <h2>Checking session</h2>
          <p>Verifying the current login.</p>
        </div>
      </main>
    );
  }

  if (isError) {
    return <Navigate replace state={{ from: location.pathname }} to="/login" />;
  }

  return <Outlet />;
}
