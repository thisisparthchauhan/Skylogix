"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

// Dynamically import MDEditor to avoid SSR issues
const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
);

interface RichTextEditorProps {
    value: string;
    onChange: (value: string | undefined) => void;
    label?: string;
    height?: number;
}

export function RichTextEditor({ value, onChange, label, height = 300 }: RichTextEditorProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-full h-[300px] bg-white/5 animate-pulse rounded-lg border border-white/10" />;
    }

    return (
        <div className="space-y-2 w-full custom-md-editor" data-color-mode="dark">
            {label && <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider block">{label}</label>}

            <style jsx global>{`
                .custom-md-editor .w-md-editor {
                    background-color: rgba(255, 255, 255, 0.05); /* Matching tailwind bg-white/5 */
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.5rem;
                    box-shadow: none;
                    overflow: hidden;
                }
                .custom-md-editor .w-md-editor-toolbar {
                    background-color: rgba(10, 15, 44, 0.8);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                }
                .custom-md-editor .w-md-editor-toolbar li > button {
                    color: #8A9BB5;
                }
                .custom-md-editor .w-md-editor-toolbar li > button:hover {
                    color: white;
                    background-color: rgba(255, 255, 255, 0.1);
                }
                .custom-md-editor .wmde-markdown {
                    background-color: transparent;
                }
            `}</style>

            <MDEditor
                value={value}
                onChange={onChange}
                height={height}
                preview="edit"
                className="w-full font-sans"
            />
        </div>
    );
}
