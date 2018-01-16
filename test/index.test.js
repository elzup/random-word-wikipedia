import test from "ava";

import execa from "execa";
import m, { getWord } from "../lib/";

test("CLI work", async t => {
	const res = await execa("./lib/cli.js");
	t.truthy(res);
});

test("module", async t => {
	const res = await m("ja");
	t.truthy(res);
});

test("getWord works", t => {
	const url =
		"https://ja.wikipedia.org/wiki/%E3%82%86%E3%82%8B%E3%82%86%E3%82%8A";
	t.is(getWord(url), "ゆるゆり");
});
