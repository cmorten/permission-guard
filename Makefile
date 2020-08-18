.PHONY: build ci deps doc fmt fmt-check lint lock test typedoc

build:
	@deno run --unstable --lock=lock.json --reload mod.ts

ci:
	@make fmt-check
	@make build
	@make test

deps:
	@npm install -g typescript typedoc

doc:
	@deno doc ./mod.ts

fmt:
	@deno fmt

fmt-check:
	@deno fmt --check

lint:
	@deno lint --unstable

lock:
	@deno run --unstable --lock=lock.json --lock-write --reload mod.ts

test:
	@deno test --unstable --allow-run ./test/

typedoc:
	@rm -rf docs
	@typedoc --ignoreCompilerErrors --out ./docs --mode modules --includeDeclarations --excludeExternals --name opine ./src
	@make fmt
	@make fmt
	@echo 'future: true\nencoding: "UTF-8"\ninclude:\n  - "_*_.html"\n  - "_*_.*.html"' > ./docs/_config.yaml
