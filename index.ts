import request from "request-promise";
import fs from "fs";
import cheerio from "cheerio";

async function main() {
  // Getting the website
  const html = await request.get(
    "https://reactnativetutorial.net/css-selectors/lesson2.html"
  );
  // Exporting to html file
  // fs.writeFileSync("./test.html", html);
  // Loading the data into cheerio
  const $ = await cheerio.load(html);
  // Getting h1 text
  // const thetext = $("h1").text();
  // console.log(thetext);

  // Selecting and playing on h2
  $("h2").each((i, e) => {
    console.log($(e).text());
  });
}
main();
