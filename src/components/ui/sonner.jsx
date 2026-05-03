import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast as sonnerToast } from "sonner";

const toastStyles = {
  success: {
    background: "#ecfdf5",
    color: "#065f46",
    border: "1px solid #10b981",
    borderRadius: "8px",
  },
  error: {
    background: "#fef2f2",
    color: "#7f1d1d",
    border: "1px solid #ef4444",
    borderRadius: "8px",
  },
  warning: {
    background: "#fffbeb",
    color: "#78350f",
    border: "1px solid #f59e0b",
    borderRadius: "8px",
  },
  info: {
    background: "#eff6ff",
    color: "#1e3a8a",
    border: "1px solid #3b82f6",
    borderRadius: "8px",
  },
};

export const toast = {
  success: (message, options = {}) =>
    sonnerToast.success(message, { style: toastStyles.success, ...options }),
  error: (message, options = {}) =>
    sonnerToast.error(message, { style: toastStyles.error, ...options }),
  warning: (message, options = {}) =>
    sonnerToast.warning(message, { style: toastStyles.warning, ...options }),
  info: (message, options = {}) =>
    sonnerToast.info(message, { style: toastStyles.info, ...options }),
};

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
      toastOptions={{
        style: (toast) => {
          switch (toast?.type) {
            case "success":
              return {
                background: "#ecfdf5",
                color: "#065f46",
                border: "1px solid #10b981",
                borderRadius: "8px",
              };
            case "error":
              return {
                background: "#fef2f2",
                color: "#7f1d1d",
                border: "1px solid #ef4444",
                borderRadius: "8px",
              };
            case "warning":
              return {
                background: "#fffbeb",
                color: "#78350f",
                border: "1px solid #f59e0b",
                borderRadius: "8px",
              };
            case "info":
              return {
                background: "#eff6ff",
                color: "#1e3a8a",
                border: "1px solid #3b82f6",
                borderRadius: "8px",
              };
            default:
              return {};
          }
        },
      }}
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      {...props} />
  );
}

export { Toaster }
