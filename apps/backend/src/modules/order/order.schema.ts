import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().trim().min(2),
  phone: z.string().trim().min(10),
  addressLine1: z.string().trim().min(5),
  addressLine2: z.string().trim().optional().or(z.literal("")),
  city: z.string().trim().min(2),
  state: z.string().trim().min(2),
  postalCode: z.string().trim().min(4),
  country: z.string().trim().min(2).default("India"),
  addressType: z.enum(["HOME", "WORK", "OTHER"]).default("HOME")
});

export const orderParamSchema = z.object({
  orderId: z.string().trim().min(1)
});
