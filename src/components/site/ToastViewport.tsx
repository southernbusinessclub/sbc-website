"use client";

import { Toast } from "@/components/ui";
import type { ToastState } from "@/lib/useToast";

export function ToastViewport({ toast, onClose }: { toast: ToastState | null; onClose: () => void }) {
  if (!toast) return null;
  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 60 }}>
      <Toast {...toast} onClose={onClose} />
    </div>
  );
}
