import { generatePageMetadata } from "@/lib/generatePageMetadata";
import BookACallContent from "./BookACallContent";

export const metadata = generatePageMetadata("bookACall");

export default function BookACallPage() {
    return <BookACallContent />;
}
