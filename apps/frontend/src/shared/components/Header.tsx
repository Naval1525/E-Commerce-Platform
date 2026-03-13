import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { clearAuthToken, fetchProducts, getAuthToken, resolveImageUrl } from "../api/client";
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

function useDebouncedValue<T>(value: T, delayMs: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = window.setTimeout(() => setDebouncedValue(value), delayMs);
    return () => window.clearTimeout(timer);
  }, [value, delayMs]);

  return debouncedValue;
}

export function Header({ cart, wishlist, user }: HeaderProps) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");
  const [loginMenuOpen, setLoginMenuOpen] = useState(false);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const headerSearchRef = useRef<HTMLDivElement | null>(null);
  const loginMenuCloseTimer = useRef<number | null>(null);
  const hasToken = Boolean(getAuthToken());
  const cartItemCount = cart?.summary.itemCount ?? 0;

  const trimmedSearch = search.trim();
  const debouncedSearch = useDebouncedValue(trimmedSearch, 220);

  const suggestionParams = useMemo(() => {
    return {
      search: debouncedSearch.length > 0 ? debouncedSearch : undefined,
      page: 1,
      limit: 6
    };
  }, [debouncedSearch]);

  const { data: suggestionData, isFetching: isSuggestionsFetching } = useQuery({
    queryKey: ["products", "suggestions", suggestionParams],
    queryFn: () => fetchProducts(suggestionParams),
    enabled: suggestionsOpen,
    staleTime: 30_000,
    retry: false
  });

  const suggestions = suggestionData?.data ?? [];

  useEffect(() => {
    setSearch(searchParams.get("search") ?? "");
  }, [searchParams]);

  useEffect(() => {
    setActiveSuggestionIndex(-1);
  }, [debouncedSearch, suggestionsOpen]);

  useEffect(() => {
    return () => {
      if (loginMenuCloseTimer.current) {
        window.clearTimeout(loginMenuCloseTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!headerSearchRef.current) return;
      if (headerSearchRef.current.contains(event.target as Node)) return;
      setSuggestionsOpen(false);
    }

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
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

    setSuggestionsOpen(false);
    setActiveSuggestionIndex(-1);
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

        <div className="relative" ref={headerSearchRef}>
          <form className="grid min-h-11 grid-cols-[auto_1fr] items-center rounded-xl border-2 border-brand-blue bg-white px-4" onSubmit={handleSubmit}>
            <Search className="text-slate-500" size={20} />
            <Input
              aria-label="Search products"
              className="min-w-0"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setSuggestionsOpen(true);
              }}
              onFocus={() => setSuggestionsOpen(true)}
              onKeyDown={(event) => {
                if (event.key === "Escape") {
                  setSuggestionsOpen(false);
                  setActiveSuggestionIndex(-1);
                  return;
                }
                if (event.key === "ArrowDown") {
                  if (!suggestionsOpen) setSuggestionsOpen(true);
                  if (suggestions.length > 0) {
                    event.preventDefault();
                    setActiveSuggestionIndex((current) => Math.min(current + 1, suggestions.length - 1));
                  }
                  return;
                }
                if (event.key === "ArrowUp") {
                  if (suggestions.length > 0) {
                    event.preventDefault();
                    setActiveSuggestionIndex((current) => Math.max(current - 1, 0));
                  }
                  return;
                }
                if (event.key === "Enter" && suggestionsOpen && activeSuggestionIndex >= 0) {
                  const picked = suggestions[activeSuggestionIndex];
                  if (picked) {
                    event.preventDefault();
                    setSuggestionsOpen(false);
                    setActiveSuggestionIndex(-1);
                    setSearch(picked.name);
                    navigate(`/products/${picked.slug}`);
                  }
                }
              }}
              placeholder="Search for products, brands and more"
            />
          </form>

          {suggestionsOpen ? (
            <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-none border border-slate-200 bg-white shadow-lg">
              {isSuggestionsFetching && suggestions.length === 0 ? (
                <div className="px-4 py-3 text-sm text-slate-500">Searching…</div>
              ) : null}

              {suggestions.length > 0 ? (
                <div className="divide-y divide-slate-100">
                  {suggestions.map((product, index) => {
                    const imageUrl = resolveImageUrl(product.image);
                    return (
                      <button
                        key={product.id}
                        type="button"
                        className={`flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 focus:bg-slate-50 ${
                          index === activeSuggestionIndex ? "bg-slate-50" : ""
                        }`}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => {
                          setSuggestionsOpen(false);
                          setActiveSuggestionIndex(-1);
                          setSearch(product.name);
                          navigate(`/products/${product.slug}`);
                        }}
                      >
                        <div className="h-10 w-10 shrink-0 overflow-hidden rounded-sm bg-white">
                          {imageUrl ? (
                            <img className="h-full w-full object-contain p-1" src={imageUrl} alt={product.name} loading="lazy" />
                          ) : (
                            <div className="grid h-full w-full place-items-center text-xs font-semibold text-slate-500">
                              {product.name.slice(0, 1).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <div className="truncate text-[15px] text-slate-900">{product.name}</div>
                          <div className="truncate text-[13px] text-[#2874f0]">in {product.category.name}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : trimmedSearch.length > 0 && !isSuggestionsFetching ? (
                <div className="px-4 py-3 text-sm text-slate-500">No matches found.</div>
              ) : null}
            </div>
          ) : null}
        </div>

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
