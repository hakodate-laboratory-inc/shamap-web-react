# ShaMAP Web

[![pipeline status](https://gitlab.com/shamap/shamap-web-react/badges/master/pipeline.svg)](https://gitlab.com/shamap/shamap-web-react/commits/master)
[![coverage report](https://gitlab.com/shamap/shamap-web-react/badges/master/coverage.svg)](https://shamap.gitlab.io/shamap-web-react/coverage/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/dee03d47-913a-4138-86a7-aed3cad3f408/deploy-status)](https://app.netlify.com/sites/inspiring-banach-4b1377/deploys)

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
