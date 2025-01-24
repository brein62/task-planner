import { Button } from "../ui/button";
import LightDarkSelector from "./LightDarkSelector";

export default function Header() {
  return (
    <header className="p-5 border border-solid border-b-gray-300">
      <div className="flex items-center gap-3">
        <div className="flex-1"></div>
        <LightDarkSelector />
        <Button>Log Out</Button>
      </div>
    </header>
  );
}
