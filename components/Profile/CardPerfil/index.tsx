import Image from "next/image";

export function CardPerfil() {
  return (
    <div className="flex flex-col items-center rounded-lg bg-card border border-card-border p-6 shadow-sm w-full">
      <Image
        src="/assets/img/profile.jpeg"
        width={300}
        height={300}
        alt="img profile"
        className="size-36 object-cover rounded-full border border-card-border bg-background"
      />

      <div className="flex flex-col gap-1 items-start mt-4">
        <span className="font-semibold text-2xl text-foreground">
          Fabricio Pereira
        </span>
        <span className="text-sm text-muted-text">fabricio-dev-front</span>
        <p className="font-normal text-sm text-foreground mt-3 leading-relaxed">
          Front-End Software Engineer
        </p>
      </div>
    </div>
  );
}
