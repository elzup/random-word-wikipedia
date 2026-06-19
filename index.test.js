import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

import randomWordWikipedia from "./lib/esm/index.js";

const read = (name) =>
	JSON.parse(readFileSync(new URL(`./mocks/${name}`, import.meta.url)));

// keyed by `${lang}:${rnlimit}` to match the wikipedia request
const fixtures = {
	"en:1": read("mock1.en.json"),
	"ja:1": read("mock1.ja.json"),
	"ja:3": read("mock3.json")
};

const realFetch = globalThis.fetch;

before(() => {
	globalThis.fetch = async (input) => {
		const url = new URL(input);
		const lang = url.hostname.split(".")[0];
		const n = url.searchParams.get("rnlimit");
		const body = fixtures[`${lang}:${n}`];
		assert.ok(body, `unexpected request: ${lang}:${n}`);
		return Response.json(body);
	};
});

after(() => {
	globalThis.fetch = realFetch;
});

test("defaults to a single English word", async () => {
	const res = await randomWordWikipedia();
	assert.ok(Array.isArray(res));
	assert.equal(res.length, 1);
});

test("supports another language", async () => {
	const res = await randomWordWikipedia("ja");
	assert.equal(res.length, 1);
});

test("supports the -n count option", async () => {
	const res = await randomWordWikipedia("ja", 3);
	assert.equal(res.length, 3);
});

test("rejects a count outside 1-10", async () => {
	await assert.rejects(randomWordWikipedia("ja", 11), TypeError);
});

test("CLI reports the error on an invalid count", () => {
	let err;
	try {
		execFileSync(process.execPath, ["cli.js", "ja", "-n", "11"], {
			encoding: "utf8",
			stdio: "pipe"
		});
	} catch (e) {
		err = e;
	}
	assert.ok(err, "CLI should exit non-zero");
	assert.match(err.stderr, /Error/);
});

test("CLI --help prints usage", () => {
	const out = execFileSync(process.execPath, ["cli.js", "--help"], {
		encoding: "utf8"
	});
	assert.match(out, /Usage/);
});
