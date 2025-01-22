import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTheme } from "../theme-provider"

/**
 * Sets the theme of the app (light/dark mode).
 */
export default function LightDarkSelector() {
  const { setTheme } = useTheme()

  return (
    <Select onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="System" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="system">System</SelectItem>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
      </SelectContent>
    </Select>
  )
}