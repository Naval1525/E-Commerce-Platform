import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { ProtectedRoute } from "../shared/components/ProtectedRoute";
import { CartPage } from "../pages/cart/CartPage";
import { CheckoutPage } from "../pages/checkout/CheckoutPage";
import { HomePage } from "../pages/home/HomePage";
import { LoginPage } from "../pages/login/LoginPage";
import { OrderConfirmationPage } from "../pages/order-confirmation/OrderConfirmationPage";
import { OrdersPage } from "../pages/orders/OrdersPage";
import { ProductDetailPage } from "../pages/product-detail/ProductDetailPage";
import { SearchResultsPage } from "../pages/search-results/SearchResultsPage";
import { SignupPage } from "../pages/signup/SignupPage";
import { WishlistPage } from "../pages/wishlist/WishlistPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/products/:slugOrId",
        element: <ProductDetailPage />
      },
      {
        path: "/search",
        element: <SearchResultsPage />
      },
      {
        path: "/cart",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <CartPage />
          }
        ]
      },
      {
        path: "/checkout",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <CheckoutPage />
          }
        ]
      },
      {
        path: "/orders",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <OrdersPage />
          }
        ]
      },
      {
        path: "/orders/:orderId/confirmation",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <OrderConfirmationPage />
          }
        ]
      },
      {
        path: "/wishlist",
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <WishlistPage />
          }
        ]
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/signup",
        element: <SignupPage />
      }
    ]
  }
]);
