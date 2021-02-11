.PHONY: build ci deps doc fmt fmt-check lint lock test typedoc

FILES_TO_FORMAT = ./examples/defaults/index.ts ./examples/granted-recommend-allowlist/index.ts ./examples/granted-strict/index.ts ./examples/granted-strict-with-revoke/index.ts ./src ./test ./deps.ts ./mod.ts ./version.ts

build:
	@deno run --unstable --reload mod.ts

ci:
	@make fmt-check
	@make lint
	@make build
	@make test

deps:
	@npm install -g typescript typedoc@0.19.2

doc:
	@deno doc ./mod.ts

fmt:
	@deno fmt ${FILES_TO_FORMAT}

fmt-check:
	@deno fmt --check ${FILES_TO_FORMAT}

lint:
	@deno lint --unstable ${FILES_TO_FORMAT}

lock:
	@deno run --unstable --lock=lock.json --lock-write --reload mod.ts

test:
	@deno test --unstable --allow-run ./test/

typedoc:
	@rm -rf docs
	@typedoc --ignoreCompilerErrors --out ./docs --mode modules --includeDeclarations --excludeExternals --name permission-guard ./src
	@make fmt
	@make fmt
	@echo 'future: true\nencoding: "UTF-8"\ninclude:\n  - "_*_.html"\n  - "_*_.*.html"' > ./docs/_config.yaml
