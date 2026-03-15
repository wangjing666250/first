# Release Checklist

1. Run `pnpm lint`.
2. Run `pnpm test:run`.
3. Run `pnpm build`.
4. Verify package output in `packages/pillar-ui/dist`.
5. Update changelog and bump version.
6. Publish packages with `pnpm --filter @xx-ui/pillar-ui publish`.
