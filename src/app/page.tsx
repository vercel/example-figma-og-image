import Image from "next/image";
import { Form } from "@/app/form";

export default function Home({
  searchParams = {
    title: "A dynamic OG Image",
    description: "Created using a few lines of code",
  },
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    <main className="mx-auto max-w-xl py-32 px-2 flex flex-col gap-10">
      <hgroup className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-800">
          Figma to OG Image
        </h1>
        <p>
          Use a Figma design instead of writing JSX to generate dynamic OG
          images for your Next.js apps.
        </p>
      </hgroup>

      <section className="flex flex-col gap-8">
        <div className="relative aspect-video">
          <div
            className="absolute inset-0 bg-gray-200 animate-pulse grid place-items-center"
            aria-hidden
          >
            Generating OG image...
          </div>
          <Image
            key={`/image?${new URLSearchParams(searchParams).toString()}`}
            src={`/image?${new URLSearchParams(searchParams).toString()}`}
            alt={`A example of a Figma design being used as a OG image.`}
            fill
          />
        </div>

        <Form searchParams={searchParams} />
      </section>

      <section className=" text-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">
          Getting Started
        </h2>

        <Header>Installation</Header>
        <p className="">
          <span className="code">experimental_FigmaImageResponse</span> is
          included in <span className="code">next.js</span>. You will need at
          least version <span className="code">next@14.0.5-canary.35</span>.
        </p>

        <Header>Usage</Header>
        <code>
          {highlightedCode`import { ${"experimental_FigmaImageResponse"} } from ${"'next/og'"}\n\nexport default async function Image() {\n  ${"return experimental_FigmaImageResponse({"}\n    ${'url: "https://figma.com/file/...",'}\n    ${"template: {"}\n      ${`title: \"${searchParams.title}\",`}\n      ${`description: \"${searchParams.description}\"`}\n    ${"}"}\n  ${"})"}\n}`}
        </code>

        <Header>Links</Header>
        <ul className="list-disc text-base ml-[14px] underline text-gray-700 underline-offset-2">
          <li>
            <a
              href="https://vercel.com/docs/functions/edge-functions/og-image-generation/og-image-examples#using-figma---experimental"
              target="_blank"
            >
              Documentation
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vercel/next.js/issues/new?assignees=&labels=template%3A+bug&projects=&template=1.bug_report.yml"
              target="_blank"
            >
              Feedback
            </a>
          </li>
          <li>
            <a
              href="https://www.figma.com/file/muVsFH50Ddm45BGtFKEdG5/FigmaImageResponse-Demo?type=design&node-id=1-60&mode=design&t=6Gu0LgySl1y0jWNH-0"
              target="_blank"
            >
              Example Figma Design
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mt-10 mb-2 font-medium text-gray-700 text-sm">{children}</h3>
  );
};

// Thanks Shu https://github.com/shuding/react-wrap-balancer/blob/1bd9b5100d0f47c9710a9d8b49bc011aa44d8d77/website/src/sections/GettingStarted.tsx#L27
function highlightedCode(
  fades: TemplateStringsArray,
  ...highlighted: string[]
) {
  const elements: JSX.Element[] = [];
  let i = 0;

  for (const fade of fades) {
    elements.push(
      <span key={i++} className="hl-fade">
        {fade}
      </span>
    );
    if (highlighted.length) {
      elements.push(
        <span key={i++} className="hl-highlighted">
          {highlighted.shift()}
        </span>
      );
    }
  }

  return elements;
}
