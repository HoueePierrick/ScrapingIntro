import request from "request-promise";
import fs from "fs";
import cheerio from "cheerio";

async function main() {
  // Getting the website
  const html = await request.get(
    "https://react-native-tutorial.thinkific.com/courses/taxi-app"
  );
  // Exporting to html file
  fs.writeFileSync("./stackoverflow.html", html);
}
main();
