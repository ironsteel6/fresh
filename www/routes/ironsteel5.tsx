// routes/greet/[name].tsx

import { PageProps } from "$fresh/server.ts";

export default function GreetPage(props: PageProps) {
  const { name } = props.params;
  return (
    /*
    <main>
      <p>Greetings to you, {name}!</p>
    </main>
    */
    <main>
    <form>
    <label>URL: <input type="text"></label>
    <input type="submit" value="Submit">
    </form>
      </main>
  );
}
