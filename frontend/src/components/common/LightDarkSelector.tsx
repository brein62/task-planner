import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "../theme-provider";

/**
 * Sets the theme of the app (light/dark mode).
 */
export default function LightDarkSelector() {
  const { theme, setTheme } = useTheme();

  return (
    <Select
      defaultValue={theme}
      onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}
    >
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="system">System</SelectItem>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
