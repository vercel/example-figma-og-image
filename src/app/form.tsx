"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

export const Form = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const router = useRouter();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        const formObject = Object.fromEntries(formData);

        // @ts-expect-error
        const params = new URLSearchParams(Object.entries(formObject));
        router.push(`/?${params.toString()}`, { scroll: false });
      }}
    >
      <h2 className="sr-only">OG Image Parameters</h2>
      <div className="flex flex-row gap-2">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            type="text"
            name="title"
            defaultValue={searchParams.title || "A dynamic OG Image"}
            className="text-base md:text-sm"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            type="text"
            name="description"
            defaultValue={
              searchParams.description || "Created using a few lines of code"
            }
            className="text-base md:text-sm"
          />
        </div>
      </div>

      <Button type="submit" className="font-normal">
        Generate OG Image
      </Button>
    </form>
  );
};
