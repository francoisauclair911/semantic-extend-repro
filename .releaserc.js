/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["main"],

  plugins: ["@semantic-release/gitlab", "@semantic-release/commit-analyzer"],
  preset: "conventionalcommits",
};
