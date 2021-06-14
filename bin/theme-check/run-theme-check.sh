#!/usr/bin/theme-check bash
set -e
ASTRA_LOCATION=$1
WP_VERSION=$2
WP_ENV=$3
WP_CACHED_ENV="/var/www/html/wp-content/${WP_ENV}.sql"
SKIP_CACHE=$4

init_environment(){
	#Setup core
	wp --allow-root core update --version=$WP_VERSION
	wp --allow-root core update-db
	rm -rf  /var/www/html/wp-content/themes/*
	chmod 0777 -R /var/www/html/wp-content/
	echo "Installing Astra theme from $ASTRA_LOCATION"
	wp --allow-root theme install --activate $ASTRA_LOCATION
	wp --allow-root option update fresh_site 0
}


if [ -f $WP_CACHED_ENV ] && [ $SKIP_CACHE == "no" ]; then
    echo "Database exists."
    wp --allow-root db import  $WP_CACHED_ENV
    init_environment
		wp --allow-root cache flush
		wp --allow-root transient delete --all
		wp --allow-root transient delete --all --network
    exit 0;
fi

# Create WP Core.
wp  --allow-root core install --url=http://localhost:8080 --title=SandboxSite --admin_user=admin --admin_password=admin --admin_email=admin@admin.com
mkdir -p /var/www/html/wp-content/uploads
rm -rf /var/www/html/wp-content/plugins/akismet

# Setup environment.
init_environment

# Install WP CLI package anhskohbo/wp-cli-themecheck.
php -d memory_limit=1024M "$(which wp)" package install anhskohbo/wp-cli-themecheck --allow-root

# Install Theme Check plugin
wp plugin install theme-check --activate --allow-root

# Run theme check for Astra zip
wp themecheck --theme=astra --no-interactive --allow-root

wp --allow-root cache flush

if [ $SKIP_CACHE == "no" ]; then
	wp --allow-root db export $WP_CACHED_ENV
fi
