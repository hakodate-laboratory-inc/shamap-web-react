# ShaMAP Web

[![pipeline status](https://gitlab.com/shamap/shamap-web-react/badges/master/pipeline.svg)](https://gitlab.com/shamap/shamap-web-react/commits/master)
[![coverage report](https://gitlab.com/shamap/shamap-web-react/badges/master/coverage.svg)](https://shamap.gitlab.io/shamap-web-react/coverage/)

Web viewer for ShaMAP.

## Development
```shell
cat <<EOF > .env
REACT_APP_SHAMAP_ADMIN_IDS=uuids
EOF

yarn install
yarn start
yarn test -w # In another window
```
