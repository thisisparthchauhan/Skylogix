import { generatePageMetadata } from "@/lib/generatePageMetadata";
import TestimonialsContent from "./TestimonialsContent";

export const metadata = generatePageMetadata("testimonials");

export default function TestimonialsPage() {
    return <TestimonialsContent />;
}
