import { CircleXIcon } from "lucide-react";

export default function ErrorBox({ message }: { message: string }) {
  return (
    <div
      className="bg-destructive border border-destructive text-destructive-foreground px-4 py-3 rounded-xl relative flex gap-2"
      role="alert"
    >
      <CircleXIcon className="text-lg" />
      <span className="block sm:inline">{message}</span>
    </div>
  );
}
