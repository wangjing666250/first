# Incremental Build Notes

- Use `pnpm build` to build all workspace packages.
- Use `pnpm build:affected` to run Turborepo affected build from the last commit.
- Use `pnpm --filter @xx-ui/pillar-ui build` to build only the library package.
