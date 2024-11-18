#!/usr/bin/env bash

set -euo pipefail

function main {
    local -r document_root="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

    php -S 0.0.0.0:8000 -t "${document_root}"
}

main
