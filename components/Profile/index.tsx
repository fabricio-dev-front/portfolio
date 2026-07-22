import { DownloadResume } from "./DownloadResume";
import { CardPerfil } from "./CardPerfil";
import { CardTecnologias } from "./CardTecnologias";

export function Profile() {
  return (
    <div className="flex flex-col gap-7.5 w-full">
      <CardPerfil />
      <CardTecnologias />
      <div className="px-1">
        <DownloadResume />
      </div>
    </div>
  );
}
