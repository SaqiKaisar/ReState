// This is a simplified version. You can use the full shadcn/ui toast component
import { toast as hotToast } from "react-hot-toast";

type ToastProps = {
  title: string;
  description?: string;
};

export const toast = ({ title, description }: ToastProps) => {
  hotToast(title, {
    duration: 3000,
  });
};
