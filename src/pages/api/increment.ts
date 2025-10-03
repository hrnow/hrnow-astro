import type { APIRoute } from "astro";
import { connectDB, getDB } from "../../lib/mongodb";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const slug = body.slug;

    if (!slug) {
      return new Response(JSON.stringify({ error: "Slug is Required" }), {
        status: 400,
      });
    }

    await connectDB();
    const db = getDB();

    const post = await db
      .collection("blogs")
      .findOne({ slug: slug.replace(/^blog\//, "") });

    let views;
    if (post) {
      await db
        .collection("blogs")
        .updateOne(
          { slug: slug.replace(/^blog\//, "") },
          { $inc: { viewCount: 1 } }
        );
      views = (post.viewCount || 0) + 1;
    } else {
      await db
        .collection("blogs")
        .insertOne({ slug: slug.replace(/^blog\//, ""), viewCount: 1 });
    }

    return Response.json({ views }, { status: 202 });
  } catch (e) {
    console.error(e);
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
};
