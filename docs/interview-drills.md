# XX-UI Interview Drills

## Chapter 1: Monorepo and pnpm

1. Why Monorepo for component libraries?
2. How does pnpm save disk and speed up install?
3. What are workspace protocol benefits?
4. Follow-up: How do you control cross-package dependency boundaries?

## Chapter 2: package fields and dependencies

1. `dependencies` vs `peerDependencies` vs `devDependencies`.
2. Meaning of `main`, `module`, `exports`, `types`.
3. Why set `vue` in peerDependencies for libraries?
4. Follow-up: What breaks if `vue` is in dependencies instead?

## Chapter 3: build and tree-shaking

1. ESM/CJS/UMD differences.
2. Tree-shaking prerequisites.
3. Why CSS often cannot be shaken.
4. Follow-up: How to improve component-level style loading?

## Chapter 4: playground and local debugging

1. Why a playground is mandatory for UI libraries.
2. Why workspace link over npm link.
3. How Vite HMR updates Vue components quickly.
4. Follow-up: How to debug stale dependency cache in monorepos?

## Chapter 5: component design

1. Controlled vs uncontrolled component design.
2. Why Message usually uses function APIs.
3. Upload component lifecycle and error handling.
4. Follow-up: How would you design keyboard accessibility for autocomplete?

## Chapter 6: testing

1. Unit vs integration vs E2E for component libraries.
2. Why behavior assertions are preferred over snapshots.
3. How to decide mock boundaries.
4. Follow-up: How to test async UI state transitions reliably?

## Chapter 7: release and engineering

1. Why lint/test/build gates are needed in CI.
2. What is semantic versioning and when to bump major.
3. How incremental build improves engineering efficiency.
4. Follow-up: How to design a release process for multiple packages?
