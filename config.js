module.exports = {
  // Bot settings
  platform: "github",
  autodiscover: false,
  onboarding: false,
  requireConfig: "optional",
  prHourlyLimit: 10,
  prConcurrentLimit: 10,
  semanticCommits: "enabled",

  // Vulnerability scanning
  osvVulnerabilityAlerts: true,
  vulnerabilityAlerts: {
    labels: ["security", "high-priority"],
    commitMessageSuffix: "[SECURITY]"
  },

  // Automerge
  platformAutomerge: true,
  automergeType: "pr",

  // Dependency settings
  extends: [
    "config:best-practices"
  ],
  timezone: "Europe/Copenhagen",
  labels: ["deps-bot"],

  nix: {
    enabled: true
  },

  packageRules: [
    {
      description: "Wait before creating PRs for standard updates to ensure stability",
      matchUpdateTypes: ["major", "minor", "patch"],
      minimumReleaseAge: "10 days",
    },
    {
      description: "Group all minor and patch Rust crate updates together",
      matchManagers: ["cargo"],
      matchUpdateTypes: ["minor", "patch"],
      groupName: "Rust minor and patch updates"
    },
    {
      description: "Group all minor and patch Python dependencies together",
      matchDatasources: ["pypi"],
      matchUpdateTypes: ["minor", "patch"],
      groupName: "Python minor and patch updates"
    },
    {
      description: "Group all minor and patch GitHub Actions updates together",
      matchManagers: ["github-actions"],
      matchUpdateTypes: ["minor", "patch"],
      groupName: "GitHub Actions minor and patch updates"
    },
    {
      description: "Group all minor and patch Docker image updates together",
      matchDatasources: ["docker"],
      matchUpdateTypes: ["minor", "patch"],
      groupName: "Docker image minor and patch updates"
    },
    {
      description: "Group all Gradle minor and patch updates together",
      matchManagers: ["gradle", "gradle-wrapper"],
      matchUpdateTypes: ["minor", "patch"],
      groupName: "Gradle minor and patch updates"
    }
  ],
};
