import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export default function BrandMarkApp() {
    const dateFormated = format(new Date(),
        'dd MMM yyyy',
        {
            locale: ptBR,
        }
    )

    return (
        <div className="text-center">
            <span className="text-slate-600 uppercase font-bold text-sm block xl:hidden">
                Logo
            </span>
            <time dateTime={dateFormated}>{dateFormated}</time>
        </div>
    )
}