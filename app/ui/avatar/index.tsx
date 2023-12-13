import Image from "next/image"

import { clsx } from "clsx"

export default function Avatar({ src, alt, size = "md", rounded = "md" }: { size?: "sm" | "md" | "lg", src: string, alt: string, rounded?: "md" | "full" }) {

    const classN = clsx(
        'relative overflow-hidden',
        [
            {
                "rounded-full": rounded === "full",
                "w-12 h-12": size === "sm",
                "w-24 h-24": size === "md",
                "w-32 h-32": size === "lg",
            },
        ],
    );

    const classImage = clsx(
        'object-cover',
        [
            {
                "rounded-full": rounded === "full",
                "w-12 h-12": size === "sm",
                "w-24 h-24": size === "md",
                "w-32 h-32": size === "lg",
            },
        ],
    );

    return (
        <section className={classN}>
            <Image fill alt={alt} src={src} className={classImage}></Image>
        </section>
    )
}