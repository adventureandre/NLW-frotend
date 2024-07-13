import { CircleDashed, UserCog } from "lucide-react";

export function Guests() {
    return (
        <div className="space-y-6 ">
            <h2 className="font-semibolde text-xl">Convidados</h2>

            <div className="space-y-5 ">

                <div className="flex justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Jessica white</span>
                        <span className="block font-sm text-zinc-400 truncate">
                            jessica.site@hotmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>

                <div className="flex justify-between gap-4">
                    <div className="space-y-1.5">
                        <span className="block font-medium text-zinc-100">Dr. Rita Pacheco</span>
                        <span className="block font-sm text-zinc-400 truncate">
                            jessica.site@hotmail.com
                        </span>
                    </div>
                    <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                </div>



            </div>

            <button className="bg-zinc-800 w-full text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700" >
                <UserCog className="size-5" />
                Gerenciar convidados
            </button>

        </div>
    )
}