import { RawConfigFile } from "tslint/lib/configuration";

const rules: RawConfigFile = {
  extends: [
    "tslint:latest",
    require.resolve("tslint-microsoft-contrib"),
    require.resolve("tslint-eslint-rules"),
    require.resolve("tslint-consistent-codestyle"),
    require.resolve("tslint-config-prettier"),
  ],
  rules: {
    // Base TSLint rules
    "completed-docs": false,
    "interface-name": false,
    "match-default-export-name": false,
    "member-access": [true, "no-public"],
    "no-any": false,
    "no-default-export": true,
    "no-non-null-assertion": false,
    "no-unsafe-any": false,
    "no-submodule-imports": false,
    "strict-boolean-expressions": false,
    typedef: false,
    "variable-name": [
      true,
      "ban-keywords",
      "check-format",
      "allow-pascal-case",
    ],

    // tslint-microsoft-contrib
    "chai-vague-errors": false,
    "export-name": false,
    "function-name": false,
    "import-name": false,
    "missing-jsdoc": false,
    "mocha-no-side-effect-code": false,
    "no-angle-bracket-type-assertion": true,
    "no-backbone-get-set-outside-model": false,
    "no-multiline-string": false,
    "no-parameter-properties": false,
    "no-relative-imports": false,
    "no-suspicious-comment": false,
    "prefer-type-cast": false,
  },
};

export = rules;
