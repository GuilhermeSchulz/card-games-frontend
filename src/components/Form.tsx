import { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSubmit: () => void;
  title?: string;
}
export function Form({ children, onSubmit, title }: FormProps) {
  return (
    <form
      className="flex flex-col items-center justify-center gap-4 
      backdrop-brightness-50 rounded-2xl p-6 w-full max-w-[400px]"
      onSubmit={onSubmit}
    >
      <h2 className="text-gray-200 uppercase font-semibold">
        {title ? title : "Login"}
      </h2>
      {children}
    </form>
  );
}
