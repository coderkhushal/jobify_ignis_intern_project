"use client"
import { routes } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navbar= () => {
	return (
		<div className="py-6 px-4 w-full   bg-white  relative">
			<nav>
				
					<div className="flex justify-between   w-full  items-center">
						<Link className="font-black text-3xl px-10 " href="/">
							{" "}
							Jobify{" "}
						</Link>
                        <div></div>
						<NavMenu  />
					</div>
				
			</nav>
		</div>
	);
};


const NavMenu = () => {

    const pathname = usePathname()
	return (<ul
    className="flex justify-end space-x-10 px-40 text-lg"
		id="navbar"
	>
		{routes.map((route, i) => (
			<li key={i}>
				<Link
                    className={pathname.toLowerCase()==route.href.toLowerCase() ? "font-bold":""}          
					href={route.href}
				>
					{route.name}
				</Link>
			</li>
		))}

	</ul>
)
}
export default Navbar