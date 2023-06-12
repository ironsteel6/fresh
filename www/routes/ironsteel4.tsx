import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";


export const handler: Handlers = {
  async GET(req, ctx) {
    return await ctx.render();
  },
  async POST(request, ctx) {
    const form = await request.formData();
    const urlFromUI = form.get("urlFromUI")?.toString() as string;
    const resp = await fetch(urlFromUI);
    const { username } = ctx.params;
    const body = new Uint8Array(await resp.arrayBuffer());
    return new Response(body);
  }
};

export default function Subscribe(page:PageProps,formData:FormData) {
  return (
    <>
      <form id="tsuiForm" action="/ironsteel4" method="post">
        <input type="url" name="urlFromUI" value="http://www.foxnews.com" />
        <button type="submit">Submit</button>
      </form>
    </>
  );


  
}