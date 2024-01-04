import Image from "next/image";
import { Form } from "@/app/form";
import { Card, CardContent } from "@/components/ui/card";

export default function Home({
  searchParams = {
    title: "A dynamic OG Image",
    description: "Created using a few lines of code",
  },
}: {
  searchParams: { [key: string]: string };
}) {
  return (
    <main className="mx-auto max-w-xl pt-32 pb-16 px-2 flex flex-col gap-10">
      <hgroup className="flex flex-col gap-4">
        <h1 className="text-3xl font-semibold text-gray-800">
          Figma to OG Image
        </h1>
        <p>
          Create dynamic OG images for your Next.js apps without writing JSX.
        </p>
      </hgroup>

      <Card
        style={{
          boxShadow:
            "0 20px 25px -5px rgb(0 0 0/8%), 0 3px 10px -6px rgba(0,0,0,.1)",
        }}
      >
        <CardContent>
          <section className="flex flex-col gap-8 pt-6">
            <div className="relative aspect-video overflow-hidden rounded-lg">
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
        </CardContent>
      </Card>

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

        <Header>Configuration</Header>
        <p className="">
          Set the environment variable{" "}
          <span className="code">FIGMA_PERSONAL_ACCESS_TOKEN</span> to your{" "}
          <a
            href="https://www.figma.com/developers/api#authentication"
            className="underline"
          >
            Figma Personal Access Token
          </a>
          .
        </p>

        <Header>Design</Header>
        <p>
          Design your OG image in Figma. This website is using this{" "}
          <a
            href="https://www.figma.com/file/muVsFH50Ddm45BGtFKEdG5/FigmaImageResponse-Demo?type=design&node-id=1-60&mode=design&t=OPmzvOPfCgO0cLSp-0"
            target="_blank"
            className="underline"
          >
            Figma design
          </a>
          .
        </p>

        <Header>Usage</Header>
        <code>
          {highlightedCode`import { ${"experimental_FigmaImageResponse"} } from ${"'next/og'"}\n\nexport default async function Image() {\n  ${"return experimental_FigmaImageResponse({"}\n    ${'url: "https://figma.com/file/...",'}\n    ${"template: {"}\n      ${`title: \"${
            searchParams.title || "A dynamic OG Image"
          }\",`}\n      ${`description: \"${
            searchParams.description || "Created using a few lines of code"
          }\"`}\n    ${"}"}\n  ${"})"}\n}`}
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
          <li>
            <a
              href="https://github.com/vercel/example-figma-og-image/blob/main/src/app/image/route.tsx"
              target="_blank"
            >
              Example Code
            </a>
          </li>
          <li>
            <a
              href="https://github.com/vercel/example-figma-og-image"
              target="_blank"
            >
              Website&apos;s GitHub Repository
            </a>
          </li>
        </ul>
      </section>

      <footer className="flex justify-center">
        <a
          href="https://vercel.com"
          className="flex flex-row gap-1 items-center mt-20 hover:text-gray-600"
          target="_blank"
        >
          <span className="text-lg">Deployed on</span>
          <span className="sr-only">Vercel</span>
          <svg
            viewBox="0 0 284 65"
            height="1.1em"
            style={{ marginTop: "2px" }}
            aria-hidden
          >
            <path
              d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </footer>
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
