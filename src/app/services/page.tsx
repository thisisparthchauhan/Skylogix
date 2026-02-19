import ServicesContent from "./ServicesContent";

import { generatePageMetadata } from "@/lib/generatePageMetadata";

export const metadata = generatePageMetadata("services");

export default function ServicesPage() {
    return <ServicesContent />;
}
