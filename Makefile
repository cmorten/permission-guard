.PHONY: build ci doc fmt fmt-check lock precommit test typedoc

build:
	@deno run --unstable --lock=lock.json --reload mod.ts

ci:
	@make fmt-check
	@make build
	@make test

doc:
	@deno doc ./mod.ts

fmt:
	@deno fmt

fmt-check:
	@deno fmt --check

lock:
	@deno run --unstable --lock=lock.json --lock-write --reload mod.ts

precommit:
	@make typedoc
	@make fmt
	@make fmt
	@make fmt
	@make lock

test:
	@deno test --unstable --allow-run ./src/guard.test.ts

typedoc:
	@typedoc --ignoreCompilerErrors --out ./docs --mode modules --includeDeclarations --excludeExternals --exclude *.test.ts ./src

