/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


var index_default={
	async fetch(request, env, ctx) {
		const html = `<html><body>
		<h1>Hello! Hello! World!</h1>
		</body></html>`;
		
		return new Response(html , {
			headers: {
				'content-type': 'text/html',
			},
		});
	}
};

export {
	index_default as default
};
