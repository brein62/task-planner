import { Calendar1 } from "lucide-react";

export default function DisplayCard() {
  return (
    <div className="rounded-lg border border-current px-4 py-2">
      <div className="flex flex-row gap-2">
        <Calendar1 />
        Event
      </div>

      <p>Tomorrow at 9pm</p>
    </div>
  );
}
