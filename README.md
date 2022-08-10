# ember-cli-pr-9987-repro

This Ember app is a test of https://github.com/ember-cli/ember-cli/pull/9987.

It uses an in-repo addon whose post-build hook succeeds the first time it's called, and then fails the second time, fourth time, sixth time, etc.

## Repro

To reproduce the issue https://github.com/ember-cli/ember-cli/pull/9987 is aiming to fix:

1. `ember serve` (build succeeds)
2. Open http://localhost:4200 in a browser (UI loads)
3. Make a change to `application.hbs` (build fails, process exits, browser does not reload)

To see that it fixes it:

1. In `package.json`, change the `ember-cli` version to git+ssh://git@github.com/bendemboski/ember-cli.git#handle-build-failures
2. `yarn`
3. `ember serve` (build succeeds)
2. Open http://localhost:4200 in a browser (UI loads)
3. Make a change to `application.hbs` (build fails, process does _not_ exit, browser does not reload)
4. Make another change to `application.hbs` (build succeeds, browser reloads)
5. Repeat steps 3-4 as desired

