"use client";

import { useCallback, useRef, useState } from "react";

export interface ToastState {
  tone?: "success" | "info" | "warning" | "danger";
  title?: string;
  message?: string;
}

const AUTO_DISMISS_MS = 4200;

export function useToast() {
  const [toast, setToast] = useState<ToastState | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hide = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(null);
  }, []);

  const show = useCallback((next: ToastState) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(next);
    timerRef.current = setTimeout(() => setToast(null), AUTO_DISMISS_MS);
  }, []);

  return { toast, show, hide };
}
