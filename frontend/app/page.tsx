import { CircleCheckBig } from "lucide-react";


export default function Home() {
  return (
  <div className="flex w-full h-full flex-col px-20 bg-yellow-50">
    <section className="light pt-14 md:pt-24  text-indigo-900">
			<div className="container px-4 mx-auto relative">
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-12 lg:col-span-6 lg:order-2 text-center lg:text-start relative">
						<img
							src="https://cdn.easyfrontend.com/pictures/hero/hero-10.png"
							alt=""
							className="lg:-mb-24 w-full"
						/>
					</div>
					<div className="col-span-12 lg:col-span-6 lg:pl-6 xl:pl-12 ezy__header10-content">
						<div className="h-full flex flex-col justify-center">
							<p className="text-xl leading-normal mb-2 opacity-50">
								
							</p>
							<h2 className="text-3xl font-bold md:text-[70px] mb-6">
								Jobify
							</h2>
							<p className="text-xl leading-normal opacity-75">
								Get hired By Top Companies in the World . We are here to help you
                find the best job that suits you. 
							</p>

							<div className="mt-12 gap-x-5 items-center text-3xl   flex  lg:py-6 ">
								{/* <ProfileKeyInfo data={infoList} /> */}
                <h1 className="font-bold text-4xl">
                  Get Hired today 
                  </h1>
                  <CircleCheckBig/>
								{/* <SocialLinks links={socialLinks} /> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  </div>
  );
}
