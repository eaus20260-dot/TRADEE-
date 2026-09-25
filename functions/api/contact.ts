/**
 * Cloudflare Pages Serverless Function
 * Route: POST or GET /api/contact
 * 
 * Automatically executed by Cloudflare Pages when deployed from GitHub.
 * Redirects any legacy API requests directly to the Jotform consultation form.
 */

type PagesFunction = (context: unknown) => Response | Promise<Response>;

const JOTFORM_URL = 'https://form.jotform.com/262643423217049';

export const onRequestPost: PagesFunction = async () => {
  return Response.redirect(JOTFORM_URL, 303);
};

export const onRequestGet: PagesFunction = async () => {
  return Response.redirect(JOTFORM_URL, 302);
};
