#!/bin/bash

# Exit if any command fails.
set -e

# Include useful functions
. "$(dirname "$0")/includes.sh"

dc exec -T -u xfs $CLI mkdir /etc/X11/fs/.wp-cli/packages
dc exec -T -u xfs $CLI ls -lsha /etc/X11/fs/.wp-cli/

# Install theme-check package.
wp package install anhskohbo/wp-cli-themecheck

# Install theme-check plugin.
wp plugin install theme-check --version=20200922.1 --activate

# Run theme check.
wp themecheck --theme=astra --no-interactive
