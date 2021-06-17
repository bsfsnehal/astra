#!/bin/bash

# Exit if any command fails.
set -e

# Include useful functions
. "$(dirname "$0")/includes.sh"

wp package install anhskohbo/wp-cli-themecheck

wp plugin install theme-check --version=20200922.1 --activate

wp themecheck --theme=astra --no-interactive
