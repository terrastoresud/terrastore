import Image from "next/image";
import { imageAsset, type ImageId } from "@/content/images";
import { IntentVisual } from "@/components/intent-visual";

export function Media({
  id,
  priority = false,
  plate = false,
  sizes = "(min-width: 1024px) 720px, 100vw",
  className = "",
}: {
  id: ImageId;
  priority?: boolean;
  plate?: boolean;
  sizes?: string;
  className?: string;
}) {
  const image = imageAsset(id);
  if (image.src) {
    return (
      <figure className={className ? `min-w-0 ${className}` : "min-w-0"}>
        <div className={plate ? "frame plate relative" : "frame relative"} style={{ aspectRatio: `${image.width} / ${image.height}` }}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
            style={{ objectPosition: image.objectPosition }}
          />
        </div>
        {image.caption ? (
          <figcaption className="px-1 py-3 text-[0.82rem] leading-5 tracking-wide text-muted">{image.caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <div className={className}>
      <IntentVisual
        variant={image.variant}
        label={image.alt}
        width={image.width}
        height={image.height}
        caption={image.caption}
      />
    </div>
  );
}
