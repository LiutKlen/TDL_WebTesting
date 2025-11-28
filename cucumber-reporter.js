import report from "multiple-cucumber-html-reporter";

report.generate({
  jsonDir: "./reports/json",
  reportPath: "./reports/cucumber",
  metadata: {
    browser: {
      name: "chrome",
      version: "142.0.7444.60",
    },
    device: "Local test machine",
    platform: {
      name: "Windwows",
      version: "11",
    },
  },
  durationInMs: true
//   customData: {
//     title: "Run info",
//     data: [
//       { label: "Project", value: "Custom project" },
//       { label: "Release", value: "1.2.3" },
//       { label: "Cycle", value: "B11221.34321" },
//       { label: "Execution Start Time", value: "Nov 19th 2017, 02:31 PM EST" },
//       { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
//     ],
//   },
});