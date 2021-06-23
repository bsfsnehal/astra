
# Set permalinks for the environment.
npm run wp-env run cli rewrite structure '%postname%' --hard --quiet

# Install gutenberg-nightly version
npm run wp-env run cli wp plugin install https://gutenbergtimes.com/wp-content/uploads/2020/11/gutenberg.zip
