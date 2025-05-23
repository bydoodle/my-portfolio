import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/photo.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">
        About me
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Greetings! My name is Viktor, and I am an IT engineer with a passion for developing web applications and exploring emerging technologies. My expertise includes HTML, CSS, and JavaScript, and I am currently delving into frameworks such as React and Next.js to create engaging and responsive projects.
        </p>
        <p>
          In addition to my technical skills, I have a creative inclination; I design 3D models using Blender, utilize Figma for design purposes, and possess foundational knowledge of Photoshop. For version control, I employ Git, and I thrive in collaborative environments where I can exchange ideas and learn from my peers.
        </p>
        <p>
          Recently, I have been investigating Python and undertaking personal projects to enhance my skills and advance my career as a developer. I maintain a strong sense of curiosity, a commitment to continuous learning, and a readiness to embrace new challenges!
        </p>
      </div>
    </section>
  );
}
