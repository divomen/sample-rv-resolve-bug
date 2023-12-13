
export class TestRun extends Base {
  constructor() {
    super();
  }


}

async function main() {
  const testRun = new TestRun();
  console.log(testRun);
}

await main();
