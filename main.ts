function html(strings: TemplateStringsArray, ...values: unknown[]) {
  return String.raw({ raw: strings }, ...values);
}

export default {
  fetch(req) {
    const userAgent = req.headers.get("user-agent");
    const headers = new Headers();
    headers.append("content-type", "text/html");

    return new Response(
      html`<div>Hello, Deno!</div><div>User-Agent: ${userAgent}`,
      { headers },
    );
  },
} satisfies Deno.ServeDefaultExport;
