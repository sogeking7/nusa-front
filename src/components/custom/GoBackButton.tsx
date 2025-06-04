import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GoBackButton({
  path,
  className,
  label = "Вернуться назад",
}: {
  path?: string;
  className?: string;
  label?: string;
}) {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className={cn("", className)}
      onClick={() => {
        if (path) {
          router.push(path);
        } else {
          router.back();
        }
      }}
    >
      <ChevronLeft size={14} />
      {label}
    </Button>
  );
}
