import test from "ava";

import execa from "execa";
const m = require(".");

test("CLI works", async t => {
	const { stdout, code } = await execa.shell("./cli.js");
	t.is(code, 0);
	t.is(stdout.split("\n").length, 1);
});

test("CLI works another lang", async t => {
	const { stdout, code } = await execa.shell("./cli.js ja");
	t.is(code, 0);
	t.is(stdout.split("\n").length, 1);
});

test("CLI works num option", async t => {
	const { stdout, code } = await execa.shell("./cli.js ja -n 7");
	t.is(code, 0);
	t.is(stdout.split("\n").length, 7);
});

test("CLI module throw num limit works", async t => {
	const { stdout, stderr, code } = await execa.shell("./cli.js ja -n 11");
	t.truthy(/Error/.test(stderr));
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

test("module throw num limit works", async t => {
	const err = await t.throwsAsync(m("ja", 11), TypeError);
	t.truthy(err.message);
});
