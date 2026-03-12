import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, Crosshair, MapPin, PencilLine, X } from "lucide-react";
import type { DeliveryAddress } from "../lib/delivery-address";
import { getAddressFromCurrentLocation } from "../lib/delivery-address";

type DeliveryAddressEditorProps = {
  address: DeliveryAddress;
  onSave: (address: DeliveryAddress) => void;
};

export function DeliveryAddressEditor({ address, onSave }: DeliveryAddressEditorProps) {
  const [draft, setDraft] = useState(address);
  const [isOpen, setIsOpen] = useState(false);
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    setDraft(address);
  }, [address]);

  async function handleUseCurrentLocation() {
    try {
      setIsLocating(true);
      setLocationError("");
      const locatedAddress = await getAddressFromCurrentLocation();
      setDraft((current) => ({
        ...current,
        ...locatedAddress
      }));
    } catch (error) {
      setLocationError(error instanceof Error ? error.message : "Unable to get current location");
    } finally {
      setIsLocating(false);
    }
  }

  return (
    <>
      <div className="rounded-lg border border-[#e0e0e0] bg-white shadow-sm">
        <div className="border-b border-[#f0f0f0] px-4 py-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-[#878787]">Select your delivery address</h2>
        </div>
        <div className="px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3 sm:flex-nowrap">
            <button
              className="flex min-w-0 flex-1 flex-wrap items-center gap-2 text-left"
              onClick={() => setDetailsExpanded((prev) => !prev)}
              type="button"
            >
              <span className="text-[15px] font-semibold text-[#212121]">{address.fullName}</span>
              <span className="text-[15px] font-medium text-[#212121]">{address.postalCode}</span>
              <span className="inline-flex rounded bg-[#f0f0f0] px-2 py-0.5 text-xs font-medium text-[#606060]">
                {address.addressType}
              </span>
              <span className="ml-1 shrink-0 text-[#878787]">
                {detailsExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>

            <div className="flex shrink-0 flex-wrap gap-2 sm:flex-nowrap" onClick={(e) => e.stopPropagation()}>
            <button
              className="inline-flex min-h-10 min-w-[88px] items-center justify-center gap-2 rounded border border-[#c2c2c2] bg-white px-4 text-sm font-semibold text-[#2874f0] hover:bg-[#f5f8ff]"
              onClick={() => setIsOpen(true)}
              type="button"
            >
              <PencilLine size={16} />
              Edit
            </button>
            <button
              className="inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-[#c2c2c2] bg-white px-4 text-sm font-semibold text-[#2874f0] hover:bg-[#f5f8ff] disabled:opacity-60"
              disabled={isLocating}
              onClick={handleUseCurrentLocation}
              type="button"
            >
              <Crosshair size={16} />
              {isLocating ? "Locating..." : "Use current location"}
            </button>
            </div>
          </div>

          {detailsExpanded ? (
            <div className="mt-3 border-t border-[#f0f0f0] pt-3">
              <p className="text-[15px] leading-snug text-[#878787]">
                {address.addressLine1}
                {address.addressLine2 ? `, ${address.addressLine2}` : ""}
              </p>
              <p className="mt-0.5 text-[15px] text-[#878787]">
                {address.city}, {address.state}, {address.country}
              </p>
            </div>
          ) : null}
        </div>

        {locationError ? <p className="border-t border-[#f0f0f0] px-4 py-3 text-sm font-medium text-red-600">{locationError}</p> : null}
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-[720px] rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#f0f0f0] px-5 py-4">
              <div className="flex items-center gap-2">
                <MapPin className="text-[#2874f0]" size={18} />
                <h2 className="text-lg font-semibold text-[#212121]">Delivery Address</h2>
              </div>
              <button className="text-[#878787]" onClick={() => setIsOpen(false)} type="button">
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 px-5 py-5 max-md:grid-cols-1">
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                Full Name
                <input
                  className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]"
                  onChange={(event) => setDraft((current) => ({ ...current, fullName: event.target.value }))}
                  value={draft.fullName}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                Phone
                <input
                  className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]"
                  onChange={(event) => setDraft((current) => ({ ...current, phone: event.target.value }))}
                  value={draft.phone}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121] md:col-span-2">
                Address Line 1
                <input
                  className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]"
                  onChange={(event) => setDraft((current) => ({ ...current, addressLine1: event.target.value }))}
                  value={draft.addressLine1}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121] md:col-span-2">
                Address Line 2
                <input
                  className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]"
                  onChange={(event) => setDraft((current) => ({ ...current, addressLine2: event.target.value }))}
                  value={draft.addressLine2}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                City
                <input
                  className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]"
                  onChange={(event) => setDraft((current) => ({ ...current, city: event.target.value }))}
                  value={draft.city}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                State
                <input
                  className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]"
                  onChange={(event) => setDraft((current) => ({ ...current, state: event.target.value }))}
                  value={draft.state}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                Postal Code
                <input
                  className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]"
                  onChange={(event) => setDraft((current) => ({ ...current, postalCode: event.target.value }))}
                  value={draft.postalCode}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                Country
                <input
                  className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]"
                  onChange={(event) => setDraft((current) => ({ ...current, country: event.target.value }))}
                  value={draft.country}
                />
              </label>
              <label className="grid gap-2 text-sm font-medium text-[#212121]">
                Address Type
                <select
                  className="min-h-11 rounded border border-[#d1d5db] px-3 outline-none focus:border-[#2874f0]"
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      addressType: event.target.value as DeliveryAddress["addressType"]
                    }))
                  }
                  value={draft.addressType}
                >
                  <option value="HOME">HOME</option>
                  <option value="WORK">WORK</option>
                  <option value="OTHER">OTHER</option>
                </select>
              </label>
            </div>

            <div className="flex items-center justify-between border-t border-[#f0f0f0] px-5 py-4 max-md:flex-col max-md:items-stretch max-md:gap-3">
              <button
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded border border-[#d1d5db] px-4 text-sm font-semibold text-[#2874f0] disabled:opacity-60"
                disabled={isLocating}
                onClick={handleUseCurrentLocation}
                type="button"
              >
                <Crosshair size={16} />
                {isLocating ? "Locating..." : "Use current location"}
              </button>
              <div className="flex gap-3 max-md:grid max-md:grid-cols-2">
                <button className="inline-flex min-h-11 items-center justify-center rounded border border-[#d1d5db] px-5 text-sm font-semibold text-[#5f6368]" onClick={() => setIsOpen(false)} type="button">
                  Cancel
                </button>
                <button
                  className="inline-flex min-h-11 items-center justify-center rounded bg-[#2874f0] px-5 text-sm font-semibold text-white"
                  onClick={() => {
                    onSave(draft);
                    setIsOpen(false);
                  }}
                  type="button"
                >
                  Save address
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
