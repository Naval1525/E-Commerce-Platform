import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Headset,
  Heart,
  LogOut,
  Package2,
  Search,
  ShoppingCart,
  UserCircle2
} from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { clearAuthToken, getAuthToken } from "../api/client";
import type { AuthUser, Cart, Wishlist } from "../api/types";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../../components/ui/dropdown-menu";

type HeaderProps = {
  cart?: Cart;
  wishlist?: Wishlist;
  user?: AuthUser;
};

export function Header({ cart, wishlist, user }: HeaderProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [loginMenuOpen, setLoginMenuOpen] = useState(false);
  const loginMenuCloseTimer = useRef<number | null>(null);
  const hasToken = Boolean(getAuthToken());
  const cartItemCount = cart?.summary.itemCount ?? 0;

  useEffect(() => {
    setSearch(searchParams.get("search") ?? "");
  }, [searchParams]);

  useEffect(() => {
    return () => {
      if (loginMenuCloseTimer.current) {
        window.clearTimeout(loginMenuCloseTimer.current);
      }
    };
  }, []);

  function scheduleLoginMenuClose() {
    if (loginMenuCloseTimer.current) {
      window.clearTimeout(loginMenuCloseTimer.current);
    }
    loginMenuCloseTimer.current = window.setTimeout(() => setLoginMenuOpen(false), 120);
  }

  function cancelLoginMenuClose() {
    if (loginMenuCloseTimer.current) {
      window.clearTimeout(loginMenuCloseTimer.current);
      loginMenuCloseTimer.current = null;
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search.trim());
    }

    navigate({
      pathname: "/search",
      search: params.toString()
    });
  }

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white">
      <div className="site-container grid min-h-[72px] grid-cols-[146px_minmax(640px,1fr)_auto] items-center gap-7 max-[1100px]:grid-cols-[132px_minmax(0,1fr)_auto] max-[1100px]:gap-4 max-md:grid-cols-1 max-md:py-3">
        <Link
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-yellow px-3 py-2 text-sm font-extrabold text-slate-900"
          to="/"
        >
          <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-[1.3rem] font-black italic text-brand-yellow">f</span>
          <span className="text-base italic">Flipkart</span>
        </Link>

        <form className="grid min-h-11 grid-cols-[auto_1fr] items-center rounded-xl border-2 border-brand-blue bg-white px-4" onSubmit={handleSubmit}>
          <Search className="text-slate-500" size={20} />
          <Input
            aria-label="Search products"
            className="min-w-0"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for products, brands and more"
          />
        </form>

        <nav className="flex items-center gap-2 max-md:overflow-x-auto max-md:pb-1">
          {hasToken && user ? (
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button className="min-h-10 gap-2 text-[15px] font-medium text-slate-900" variant="ghost">
                  <UserCircle2 size={20} />
                  <span>Account</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[240px]">
                <div className="px-3 py-2 text-base font-bold text-slate-900">Your Account</div>
                <DropdownMenuItem onSelect={() => navigate("/wishlist")}>
                  <span className="grid h-5 w-5 place-items-center text-slate-600">
                    <Heart size={16} />
                  </span>
                  <span>Wishlist</span>
                  <span className="ml-auto text-sm text-slate-500">{wishlist?.items.length ?? 0}</span>
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => navigate("/orders")}>
                  <span className="grid h-5 w-5 place-items-center text-slate-600">
                    <Package2 size={16} />
                  </span>
                  <span>Orders</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onSelect={async () => {
                    clearAuthToken();
                    await queryClient.clear();
                    navigate("/login");
                  }}
                >
                  <span className="grid h-5 w-5 place-items-center text-slate-600">
                    <LogOut size={16} />
                  </span>
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <DropdownMenu modal={false} open={loginMenuOpen} onOpenChange={setLoginMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  className="min-h-10 gap-2 rounded-none text-[15px] font-medium text-slate-900"
                  variant="ghost"
                  onClick={() => navigate("/login")}
                  onMouseEnter={() => {
                    cancelLoginMenuClose();
                    setLoginMenuOpen(true);
                  }}
                  onMouseLeave={() => {
                    scheduleLoginMenuClose();
                  }}
                  onFocus={() => {
                    cancelLoginMenuClose();
                    setLoginMenuOpen(true);
                  }}
                  onBlur={() => {
                    scheduleLoginMenuClose();
                  }}
                >
                  <UserCircle2 size={20} />
                  <span>Login</span>
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="min-w-[140px] border-0 bg-transparent p-0 shadow-none"
                onMouseEnter={() => {
                  cancelLoginMenuClose();
                  setLoginMenuOpen(true);
                }}
                onMouseLeave={() => {
                  scheduleLoginMenuClose();
                }}
                onFocusCapture={() => {
                  cancelLoginMenuClose();
                  setLoginMenuOpen(true);
                }}
                onBlurCapture={() => {
                  scheduleLoginMenuClose();
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-2 left-1/2 h-0 w-0 -translate-x-1/2 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-brand-blue"
                />
                <DropdownMenuItem
                  className="w-full justify-center rounded-none bg-brand-blue px-4 py-3 text-[15px] font-semibold text-white hover:bg-blue-700 focus:bg-blue-700"
                  onSelect={() => navigate("/login")}
                >
                  Login
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="min-h-10 gap-2 text-[15px] font-medium text-slate-900" variant="ghost">
                More
                <ChevronDown size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => window.alert("Customer support coming next.")}>
                <span className="grid h-5 w-5 place-items-center text-slate-600">
                  <Headset size={16} />
                </span>
                <span>Customer Support</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="min-h-10 gap-2 text-[15px] font-medium text-slate-900" variant="ghost" onClick={() => navigate("/cart")}>
            <span className="relative inline-flex h-6 w-6 items-center justify-center">
              <ShoppingCart size={20} />
              {cartItemCount > 0 ? (
                <span className="absolute -right-2 -top-2 grid min-w-5 place-items-center rounded-full bg-red-500 px-1 text-[10px] font-bold leading-5 text-white">
                  {cartItemCount}
                </span>
              ) : null}
            </span>
            <span>Cart</span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
