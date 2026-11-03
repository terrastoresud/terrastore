import Image from "next/image";

const files = {
  header: { src: "/brand/logo-header.png", width: 666, height: 274 },
  full: { src: "/brand/logo.png", width: 670, height: 312 },
} as const;

export function BrandLogo({
  variant = "header",
  className,
  priority = false,
}: {
  variant?: keyof typeof files;
  className?: string;
  priority?: boolean;
}) {
  const file = files[variant];
  return (
    <Image
      src={file.src}
      alt=""
      width={file.width}
      height={file.height}
      priority={priority}
      quality={85}
      sizes={variant === "full" ? "(min-width: 640px) 19rem, 90vw" : "150px"}
      className={className ?? (variant === "full" ? "h-auto w-[19rem] max-w-full" : "h-12 w-auto sm:h-14")}
    />
  );
}
