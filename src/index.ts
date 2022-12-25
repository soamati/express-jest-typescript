import createApp from "./app";

async function main() {
  const app = createApp();

  app.listen(4000, async () => {
    console.log("Server is up! 🌈");
  });
}

main();
