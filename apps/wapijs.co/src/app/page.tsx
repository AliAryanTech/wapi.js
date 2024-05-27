import { Button, ClipboardCopy } from '@wapijs/ui'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

export default function Home() {
	return (
		<main className="my-auto flex min-h-screen flex-row items-center justify-center gap-5 pl-10">
			<div className="flex flex-1 flex-col gap-6">
				<div
					className="mx-auto flex w-fit flex-row items-center justify-center gap-5 py-4"
					id="launch-banners"
				>
					<div className="flex-1">
						<Link
							href={'https://peerlist.io/sarthakjdev/project/wapijs'}
							target="_blank"
						>
							<Image
								src={'/assets/peerlist-launch.svg'}
								height={48}
								width={160}
								alt="peerlist-laucnh-batch"
							/>
						</Link>
					</div>
					<div className="flex-1">
						<Link
							href="https://www.producthunt.com/posts/wapi-js?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wapi&#0045;js"
							target="_blank"
						>
							<Image
								src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=458125&theme=light"
								alt="Wapi&#0046;js - build&#0032;WhatsApp&#0032;business&#0032;apps&#0032;easily&#0032;and&#0032;faster | Product Hunt"
								width="180"
								height="39"
							/>
						</Link>
					</div>
				</div>
				<div className="mx-auto">
					<ClipboardCopy textToBeCopied="pnpm i @wapijs/wapi.js" />
				</div>
				<div className="flex flex-col items-center justify-center gap-5">
					<h1 className="mx-auto flex max-w-5xl flex-col gap-2 text-center text-4xl font-bold leading-relaxed sm:text-5xl md:text-7xl">
						Build WhatsApp Chat Bots
						<span className="block text-primary-500">Ease. Fast</span>
					</h1>
				</div>
				<div className="flex flex-col items-center gap-6">
					<div className="flex flex-row gap-3">
						<Link href={'/docs'}>
							<Button>Documentation</Button>
						</Link>
						{/* 
						<Link href={'/guide'}>
							<Button intent={'secondary'} size={'large'}>
								Guide
							</Button>
						</Link> */}

						<Link href={'https://github.com/sarthakjdev/wapi.js'} target="_blank">
							<Button intent={'secondary'}>
								Github
								<ArrowTopRightOnSquareIcon className="h-5 w-5" />
							</Button>
						</Link>
					</div>
				</div>
			</div>

			<div className="flex h-screen max-w-4xl flex-1  items-center bg-secondary-950 px-4">
				<video autoPlay={true} loop={true} muted className="rounded-xl">
					<source src="https://res.cloudinary.com/dm4zlrwhs/video/upload/v1716021568/library-usage-flow_qvvig8.mp4" />
				</video>
			</div>
		</main>
	)
}
