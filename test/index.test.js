import test from "ava";

import execa from "execa";
import m from "../lib/";

test("CLI work", async t => {
	const res = await execa("./lib/cli.js");
	t.truthy(res);
});

test("module", async t => {
	const res = await m("ja");
	console.log(res);
	t.truthy(res);
});
