const https = require("https");

export async function getResolvedUrl(url) {
  return new Promise((resolve, reject) => {
    https
      .request(url, { method: "HEAD" }, (res) => {
        const resolvedUrl = res.headers.location;
        resolve(resolvedUrl);
      })
      .on("error", (err) => {
        reject(err);
      })
      .end();
  });
}
