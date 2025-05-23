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
          Greetings! My name is Viktor, I'm an IT engineer with a passion for developing web applications and learning new technologies. My experience includes HTML, CSS, and JavaScript, and I'm currently delving into frameworks like React and Next.js to create interesting and responsive projects.
        </p>
        <p>
          I also have experience in creating games on Unity and have a basic knowledge of C#. 
        </p>
        <p>
          In addition to technical skills, I have creative inclinations; I develop 3D models using Blender and am proficient in Photoshop.
        </p>
        <p>
          Recently, I've been working on personal projects to improve my skills and advance my career as a developer. I maintain a strong sense of curiosity, a commitment to continuous learning, and a willingness to take on new challenges!
        </p>
      </div>
    </section>
  );
}
