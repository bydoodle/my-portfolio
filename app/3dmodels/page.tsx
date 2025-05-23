import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">3D Models</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/nineteen-bookshelf.jpg",
            alt: "SOTM props",
            href: "https://www.artstation.com/artwork/wr5ZGX",
          },
          {
            src: "/photos/nineteen-tsunya.jpg",
            alt: "Character model",
            href: "https://www.artstation.com/artwork/lGXNKz",
          },
          {
            src: "/photos/nineteen-shtuka.jpg",
            alt: "Sticker holder",
            href: "https://www.artstation.com/artwork/5WOQZg",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/nineteen-fender.jpg", alt: "Guitar", href: "https://www.artstation.com/artwork/rJwRo6" },
          { src: "/photos/nineteen-scene.jpg", alt: "Fantasy library", href: "https://www.artstation.com/artwork/Ryov6m" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/nineteen-synth.jpg", alt: "Grease synth", href: "https://www.artstation.com/artwork/vD800D" },
          { src: "/photos/nineteen-keyboard.jpg", alt: "90-s Keyboard", href: "https://www.artstation.com/artwork/lDYODY" },
        ]}
      />
    </section>
  );
}
