import test from "ava";
import m from ".";
import execa from "execa";

test("CLI work", async t => {
	let ret;

	try {
		ret = await execa("./cli.js");
	} catch (err) {
		ret = err.stderr;
	}

	t.true(/./.test(ret));
});

test("module", t => {
	t.true(/./.test(m("unicorns")));
});
