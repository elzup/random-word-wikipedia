import test from "ava";

import execa from "execa";
import m from "../lib/";

test("CLI works", async t => {
	const res = await execa("./lib/cli.js");
	t.is(typeof res, "string");
	t.truthy(res);
});

test("CLI works another lang", async t => {
	const res = await execa("./lib/cli.js ja");
	t.is(typeof res, "string");
	t.truthy(res);
});

test("CLI works num option", async t => {
	const res = await execa("./lib/cli.js ja -n 7");
	t.is(typeof res, "string");
	t.is(res.split("\n").length, 7);
});

test("module works", async t => {
	const res = await m();
	t.true(Array.isArray(res));
	t.is(res.length, 1);
});

test("module works another lang", async t => {
	const res = await m("ja");
	t.true(Array.isArray(res));
	t.is(res.length, 1);
});

test("module works num option", async t => {
	const res = await m("ja", 3);
	t.true(Array.isArray(res));
	t.is(res.length, 3);
});
