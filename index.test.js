import test, { after, before } from "ava";

import execa from "execa";
import fetchMock from "fetch-mock";

const m = require(".");

const mock1en = require("./mocks/mock1.en.json");
const mock1ja = require("./mocks/mock1.ja.json");
const mock3ja = require("./mocks/mock3.json");
const mock7ja = require("./mocks/mock7.json");
const mock10ja = require("./mocks/mock10.json");

const makeUrl = (lang, n) =>
	`https://${lang}.wikipedia.org/w/api.php?format=json&action=query&list=random&rnnamespace=0&rnlimit=${n}`;
before(() => {
	fetchMock
		.get(makeUrl("en", 1), { status: 200, body: mock1en })
		.get(makeUrl("ja", 1), { status: 200, body: mock1ja })
		.get(makeUrl("ja", 3), { status: 200, body: mock3ja })
		.get(makeUrl("ja", 7), { status: 200, body: mock7ja })
		.get(makeUrl("ja", 10), { status: 200, body: mock10ja });
});
after(() => {
	fetchMock.restore();
});

test("CLI works", async (t) => {
	const { stdout, code } = await execa.shell("./cli.js");
	t.is(code, 0);
	t.is(stdout.split("\n").length, 1);
});

test("CLI works another lang", async (t) => {
	const { stdout, code } = await execa.shell("./cli.js ja");
	t.is(code, 0);
	t.is(stdout.split("\n").length, 1);
});

test("CLI works num option", async (t) => {
	const { stdout, code } = await execa.shell("./cli.js ja -n 7");
	t.is(code, 0);
	t.is(stdout.split("\n").length, 7);
});

test("CLI module throw num limit works", async (t) => {
	const { stdout, stderr, code } = await execa.shell("./cli.js ja -n 11");
	t.truthy(/Error/.test(stderr));
});

test("module works", async (t) => {
	const res = await m();
	t.true(Array.isArray(res));
	t.is(res.length, 1);
});

test("module works another lang", async (t) => {
	const res = await m("ja");
	t.true(Array.isArray(res));
	t.is(res.length, 1);
});

test("module works num option", async (t) => {
	const res = await m("ja", 3);
	t.true(Array.isArray(res));
	t.is(res.length, 3);
});

test("module throw num limit works", async (t) => {
	const err = await t.throwsAsync(m("ja", 11), TypeError);
	t.truthy(err.message);
});
