"use client";

import { UploadCloud, Image as ImageIcon, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploadProps {
    value?: string;
    onChange: (url: string) => void;
    label?: string;
    accept?: string;
    maxSize?: number; // MB
}

export function FileUpload({ value, onChange, label, accept = "image/*", maxSize = 5 }: FileUploadProps) {
    const [preview, setPreview] = useState<string | null>(value || null);
    const [isUploading, setIsUploading] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) return;
        const file = acceptedFiles[0];

        // Simulate upload
        setIsUploading(true);
        const objectUrl = URL.createObjectURL(file);

        // Mock API lag
        setTimeout(() => {
            setPreview(objectUrl);
            onChange(objectUrl);
            setIsUploading(false);
        }, 1500);
    }, [onChange]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: accept ? { [accept]: [] } : undefined,
        maxSize: maxSize * 1024 * 1024,
        maxFiles: 1
    });

    const removeFile = (e: React.MouseEvent) => {
        e.stopPropagation();
        setPreview(null);
        onChange("");
    };

    return (
        <div className="space-y-2 w-full">
            {label && <label className="text-xs font-semibold text-[#8A9BB5] uppercase tracking-wider block">{label}</label>}

            <div
                {...getRootProps()}
                className={`relative flex flex-col items-center justify-center w-full min-h-[160px] border-2 border-dashed rounded-xl p-6 transition-colors cursor-pointer text-center group ${isDragActive ? "border-[#4F8EF7] bg-[#4F8EF7]/5" : "border-white/10 hover:border-white/30 bg-white/[0.02] hover:bg-white/[0.04]"
                    }`}
            >
                <input {...getInputProps()} />

                {isUploading ? (
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 border-2 border-[#4F8EF7] border-t-transparent rounded-full animate-spin mb-3"></div>
                        <p className="text-sm text-white font-medium">Uploading...</p>
                    </div>
                ) : preview ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Remove Button */}
                        <button
                            onClick={removeFile}
                            className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 hover:bg-red-600 outline outline-4 outline-[#080D1E] text-white rounded-full flex items-center justify-center transition-all shadow-lg z-10 opacity-0 group-hover:opacity-100"
                        >
                            <X size={14} />
                        </button>

                        <div className="w-full max-h-[200px] overflow-hidden rounded-lg flex items-center justify-center bg-black/20">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={preview} alt="Upload preview" className="max-w-full max-h-[200px] object-contain rounded-lg" />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center text-[#8A9BB5] gap-3">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <UploadCloud className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white mb-1">
                                {isDragActive ? "Drop file here" : "Click or drag file to upload"}
                            </p>
                            <p className="text-xs text-[#8A9BB5]">
                                SVG, PNG, JPG or GIF (max. {maxSize}MB)
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
