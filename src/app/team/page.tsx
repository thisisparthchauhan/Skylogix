import { generatePageMetadata } from "@/lib/generatePageMetadata";
import TeamContent from "./TeamContent";

export const metadata = generatePageMetadata("team");

export default function TeamPage() {
    return <TeamContent />;
}
