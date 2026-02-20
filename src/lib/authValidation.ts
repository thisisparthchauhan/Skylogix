import { z } from "zod";

const passwordSchema = z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[a-z]/, "Must contain at least one lowercase letter")
    .regex(/[0-9]/, "Must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Must contain at least one special character");

export const signUpSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters").regex(/^[A-Za-z\s]+$/, "Letters only"),
    lastName: z.string().min(2, "Last name must be at least 2 characters").regex(/^[A-Za-z\s]+$/, "Letters only"),
    email: z.string().email("Please enter a valid email address"),
    mobile: z.string().min(10, "Mobile number must be at least 10 digits").optional().or(z.literal('')),
    password: passwordSchema,
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
        message: "You must agree to the Terms & Conditions",
    }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
    identifier: z.string().min(1, "Email or mobile number is required")
        // Basic check: if it has an @ it's an email, else it must be at least 10 chars (phone)
        .refine((val) => val.includes('@') ? z.string().email().safeParse(val).success : val.length >= 10, {
            message: "Enter a valid email or 10-digit mobile number",
        }),
    password: z.string().min(1, "Password is required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
    identifier: z.string().min(1, "Required").refine((val) => val.includes('@') ? z.string().email().safeParse(val).success : val.length >= 10, {
        message: "Enter a valid email or mobile number",
    }),
    otp: z.string().length(6, "OTP must be exactly 6 digits").optional(),
    newPassword: passwordSchema.optional(),
    confirmNewPassword: z.string().optional(),
}).refine((data) => {
    // If we're at step 3 (setting password), confirm it matches
    if (data.newPassword || data.confirmNewPassword) {
        return data.newPassword === data.confirmNewPassword;
    }
    return true;
}, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
});

export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
