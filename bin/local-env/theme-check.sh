#!/bin/bash

# Exit if any command fails.
set -e

# Include useful functions
. "$(dirname "$0")/includes.sh"

dc exec -T -u xfs $CLI mkdir /var/www/html/.wp-cli
dc exec -T -u xfs $CLI ls -lsha /var/www/html
dc exec -T -u xfs $CLI export WP_CLI_PACKAGES_DIR=/var/www/html/.wp-cli

# Install theme-check package.
wp package install anhskohbo/wp-cli-themecheck

# Install theme-check plugin.
wp plugin install theme-check --version=20200922.1 --activate

# Run theme check.
wp themecheck --theme=astra --no-interactive
