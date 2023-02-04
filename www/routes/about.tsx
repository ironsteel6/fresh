// routes/about.tsx


export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
    </main>
  );
}

/*
import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

const url = 'https://www.wsj.com/articles/global-stocks-markets-dow-update-12-12-2022-11670845873';

const res = await fetch(url);
debugger;
const body = new Uint8Array(await res.arrayBuffer());
//await Deno.stdout.write(body);
serve((req: Request) => new Response(body));
*/


/*
https://deno.land/manual@v1.28.3/getting_started/first_steps
Let's walk through what this application does:

We get the first argument passed to the application, and store it in the url constant.
We make a request to the url specified, await the response, and store it in the res constant.
We parse the response body as an ArrayBuffer, await the response, and convert it into a Uint8Array to store in the body constant.
We write the contents of the body constant to stdout.
*/
