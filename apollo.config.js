module.exports = {
  client: {
    includes: ["./FrontPage/**/*.graphql"],
    service: {
      name: "frontpage",
      url: "http://localhost:8080/graphql"
    }
  }
}

if (module === require.main) {
  let json = JSON.stringify(module.exports.client)
  console.log(json)
}
