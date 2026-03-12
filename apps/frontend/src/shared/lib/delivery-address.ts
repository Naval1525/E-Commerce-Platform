export type DeliveryAddress = {
  fullName: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  addressType: "HOME" | "WORK" | "OTHER";
};

const STORAGE_KEY = "flipkart-clone-delivery-address";

export const defaultDeliveryAddress: DeliveryAddress = {
  fullName: "Demo User",
  phone: "9999999999",
  addressLine1: "221 Demo Street",
  addressLine2: "Near Central Mall",
  city: "Bengaluru",
  state: "Karnataka",
  postalCode: "560001",
  country: "India",
  addressType: "HOME"
};

export function getStoredDeliveryAddress() {
  if (typeof window === "undefined") {
    return defaultDeliveryAddress;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return defaultDeliveryAddress;
  }

  try {
    return {
      ...defaultDeliveryAddress,
      ...JSON.parse(raw)
    } satisfies DeliveryAddress;
  } catch {
    return defaultDeliveryAddress;
  }
}

export function setStoredDeliveryAddress(address: DeliveryAddress) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(address));
}

export async function getAddressFromCurrentLocation(): Promise<Partial<DeliveryAddress>> {
  if (typeof window === "undefined" || !navigator.geolocation) {
    throw new Error("Location access is not available in this browser");
  }

  const position = await new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000
    });
  });

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
    {
      headers: {
        Accept: "application/json"
      }
    }
  );

  if (!response.ok) {
    throw new Error("Unable to fetch address for your current location");
  }

  const data = (await response.json()) as {
    address?: Record<string, string | undefined>;
  };
  const address = data.address ?? {};

  return {
    addressLine1:
      [address.house_number, address.road].filter(Boolean).join(" ") ||
      address.neighbourhood ||
      address.suburb ||
      defaultDeliveryAddress.addressLine1,
    addressLine2:
      [address.suburb, address.city_district, address.county].filter(Boolean).join(", "),
    city:
      address.city ||
      address.town ||
      address.village ||
      defaultDeliveryAddress.city,
    state: address.state || defaultDeliveryAddress.state,
    postalCode: address.postcode || defaultDeliveryAddress.postalCode,
    country: address.country || defaultDeliveryAddress.country
  };
}
