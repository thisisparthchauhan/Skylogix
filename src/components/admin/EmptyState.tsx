import { LucideIcon } from "lucide-react";

interface EmptyStateProps {
    icon: LucideIcon;
    title: string;
    message: string;
    action?: React.ReactNode;
}

export function EmptyState({ icon: Icon, title, message, action }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center border border-white/5 border-dashed rounded-xl bg-white/[0.02]">
            <div className="w-16 h-16 rounded-full bg-[#4F8EF7]/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-[#4F8EF7]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-[#8A9BB5] text-sm max-w-sm mx-auto mb-6">
                {message}
            </p>
            {action && (
                <div>{action}</div>
            )}
        </div>
    );
}
