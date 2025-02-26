import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
    return (

        <div className="space-y-6 ">
            <h2 className="font-semibolde text-xl">Links importantes</h2>

            <div className="space-y-5 ">
                <div className="flex justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do airBnB</span>
                        <a href="#" className="block font-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.airbnb.com.br/rooms/10472342442424242424242423400011
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />

                </div>

                <div className="flex justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Reserva do airBnB</span>
                        <a href="#" className="block font-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.airbnb.com.br/rooms/10472342442424242424242423400011
                        </a>
                    </div>
                    <Link2 className="text-zinc-400 size-5 shrink-0" />

                </div>

            </div>

            <button className="bg-zinc-800 w-full text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700" >
                <Plus className="size-5" />
                Cadastrar novo link
            </button>

        </div>
    )

}