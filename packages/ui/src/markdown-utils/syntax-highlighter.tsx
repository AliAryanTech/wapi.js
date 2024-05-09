import { getHighlighterCore } from 'shiki/core'
import getWasm from 'shiki/wasm'

export async function SyntaxHighlighter({
	lang,
	code,
	className = ''
}: {
	className?: string
	code: string
	lang: string
}) {
	const highlighter = await getHighlighterCore({
		themes: [
			import('shiki/themes/github-light.mjs'),
			import('shiki/themes/github-dark-dimmed.mjs')
		],
		langs: [import('shiki/langs/typescript.mjs'), import('shiki/langs/javascript.mjs')],
		loadWasm: getWasm
	})

	const codeHtml = highlighter.codeToHtml(code.trim(), {
		lang,
		themes: {
			light: 'github-light',
			dark: 'github-dark-dimmed'
		}
	})

	return (
		<>
			{/* eslint-disable-next-line react/no-danger */}
			<div className={className} dangerouslySetInnerHTML={{ __html: codeHtml }} />
		</>
	)
}
