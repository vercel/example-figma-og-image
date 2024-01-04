import { experimental_FigmaImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const [geistSemiBoldFont] = await Promise.all([
    fetch(new URL("../Geist-SemiBold.otf", import.meta.url)).then((res) =>
      res.arrayBuffer()
    ),
  ]);

  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "A dynamic OG Image";
  const description =
    searchParams.get("description") ?? "Created using a few lines of code";

  return experimental_FigmaImageResponse({
    url: "https://www.figma.com/file/lbTOxOq2wdE4ZK5vH4ADvb/Changelog-Images?type=design&node-id=3470-8964&mode=design&t=8r7sUnhzATSbyOhL-4",
    template: {
      Title: {
        value: title,
        props: { centerHorizontally: true },
      },
      Description: {
        value: description,
        props: { centerHorizontally: true },
      },
    },
    fonts: [
      {
        name: "Geist",
        data: geistSemiBoldFont,
        style: "normal",
        weight: 600,
      },
    ],
  });
}
