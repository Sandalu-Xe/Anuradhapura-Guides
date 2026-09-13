import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.TEST_BASE_URL ?? "http://localhost:3001";
const routes = [
  "/",
  "/places",
  "/places/abhayagiri-vihara",
  "/stay",
  "/packages",
  "/contact",
  "/reviews",
];

for (const route of routes) {
  test(`renders ${route} with shared navigation and page content`, async () => {
    const response = await fetch(new URL(route, baseUrl), {
      signal: AbortSignal.timeout(30000),
    });
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /text\/html/);
    const html = await response.text();
    assert.match(html, /<h1[\s>]/);
    assert.match(html, /Anuradhapura/);
    assert.match(html, /href="\/places"/);
    assert.match(html, /href="\/contact"/);
    assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
  });
}

test("unknown routes render a 404", async () => {
  const response = await fetch(new URL("/nonexistent-refactor-test", baseUrl), {
    signal: AbortSignal.timeout(30000),
  });
  assert.equal(response.status, 404);
});
