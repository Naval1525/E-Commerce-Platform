import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCart, fetchMe, fetchWishlist, getAuthToken } from "../shared/api/client";
import { Footer } from "../shared/components/Footer";
import { Header } from "../shared/components/Header";

export function AppLayout() {
  const hasToken = Boolean(getAuthToken());
  const { data: user } = useQuery({
    queryKey: ["auth", "me"],
    queryFn: fetchMe,
    enabled: hasToken,
    retry: false
  });

  const { data: cart } = useQuery({
    queryKey: ["cart"],
    queryFn: fetchCart,
    enabled: hasToken
  });

  const { data: wishlist } = useQuery({
    queryKey: ["wishlist"],
    queryFn: fetchWishlist,
    enabled: hasToken
  });

  return (
    <div className="app-shell">
      <Header cart={cart} user={user} wishlist={wishlist} />
      <Outlet />
      <Footer />
    </div>
  );
}
