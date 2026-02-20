import { Metadata } from "next";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Admin Panel | Skylogix",
    description: "Secure admin dashboard for Skylogix Technologies",
    robots: {
        index: false,
        follow: false,
    }
};

export default function RootAdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // TODO: Add real session/JWT validation here
    // const session = await getAdminSession();
    // if (!session) redirect('/admin/login');

    return (
        <div className="admin-root-override">
            <AdminLayout>
                {children}
            </AdminLayout>
        </div>
    );
}
