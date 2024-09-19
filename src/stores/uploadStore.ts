import { create } from "zustand";
import { UploadedFile } from "@/interface/file";

interface UploadStore {
    uploadData: UploadedFile | null;
    updateUploadData: (data: UploadedFile) => void; // Rename for clarity
}

export const useUploadStore = create<UploadStore>((set) => ({
    uploadData: null, 
    updateUploadData: (data: UploadedFile) => set({ uploadData: data }), 
}));
