// routes/github/[username].tsx

import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    //const resp = await fetch(`https://api.github.com/users/${username}`);
    const url = 'https://www.wsj.com/articles/global-stocks-markets-dow-update-12-12-2022-11670845873';
    const resp = await fetch(url);
    const body = new Uint8Array(await resp.arrayBuffer());
    
    return new Response(body));
    
    /* og
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
    */
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <img src={data.avatar_url} width={64} height={64} />
      <h1>{data.name}</h1>
      <p>{data.login}</p>
    </div>
  );
}
