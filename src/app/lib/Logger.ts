import { LogLevel } from "typescript-logging";
import { Log4TSProvider } from "typescript-logging-log4ts-style";
import { asyncWriteFile } from "./FileWriter";
export const log4TSProvider = Log4TSProvider.createProvider("FrontendLogger", {
  groups: [
    {
      identifier: "matchAll",
      expression: new RegExp(".+"),
    },
  ],
  level: LogLevel.Info,
  dateFormatter: (millisSinceEpoch) => `${millisSinceEpoch}`, // Silly example, normally you'd e.g. create a Date and do custom formatting for that.
  channel: {
    type: "LogChannel",
    write: (logMessage) => {
      asyncWriteFile("log.txt", logMessage);
    },
  },
});
