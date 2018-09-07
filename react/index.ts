import { RawConfigFile } from "tslint/lib/configuration";

const rules: RawConfigFile = {
  extends: [require.resolve("../index"), require.resolve("tslint-react")],
  rules: {
    // Base TSLint rules
    "no-this-assignment": false,

    // tslint-react
    "jsx-no-multiline-js": false,
    "jsx-boolean-value": false,

    // tslint-microsoft-contrib
    "react-this-binding-issue": false,
    "no-single-line-block-comment": false,
  },
};

export = rules;
