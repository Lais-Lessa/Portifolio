import { Tech } from "@/app/components/tech-badge"
import Image from "next/image"

export const ExperienceItem = () => {
    return (
        <div className="grid grid-col-[40px,1fr] gap-4 md:gap-10">
            <div className="flex flex-col item-center gap-4">
                <div >
                {/* className="rounded-full border border-gray-500 p-0.5" */}
                    <Image
                    src={"/images/iconetecnologia.png"}
                    width={40}
                    height={40}
                    className="rounded-full"
                    alt="Logo da empresa"
                    />
                </div> 

            </div>


            <div className="flex flex-col gap-2 text-sm sm:text-base">
                <a href="/"
                target="_blank"
                className="text-gray-500 hover:text-cyan-500 transition-colors">
                @ Nome da Empresa
                </a>

                <h4 className="text-gray-300">Função</h4>
                <span className="text-gray-500"> data </span>
                <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias assumenda tempora adipisci! Autem, dolores atque at iste nisi debitis quis.
                </p>
            </div>

            <p className="text-gray-400 text-sm mb-3 mt-6 font-semibold ">Competências</p>

            <div className="flex gap-x-2 gap-y-3 flex-wrap lg:max-w-[350px] mb-8">
                <Tech name="React" />
                <Tech name="React" />
                <Tech name="React" />
            </div>
        </div>
    )
}
