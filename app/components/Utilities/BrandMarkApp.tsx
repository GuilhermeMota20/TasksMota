import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useLayoutSystem } from "../../services/hooks/useLayoutSystem";

export default function BrandMarkApp() {
	const { isNavHorizontal } = useLayoutSystem();

	const dateFormated = format(new Date(),
		'dd MMM yyyy',
		{
			locale: ptBR,
		}
	);

	return (
		<div className="text-center">
			{!isNavHorizontal ? (
				<>
					<h1 className="font-bold text-md text-center xl:hidden">ToDoTask <span className="text-pink-600">.</span></h1>
					<time dateTime={dateFormated}>{dateFormated}</time>
				</>
			) : (
				<h1 className="font-bold text-md text-center">ToDoTask <span className="text-pink-600">.</span></h1>
			)}
		</div>
	)
}