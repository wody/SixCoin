const HelloWorld = artifacts.require("HelloWorld");

contract("Hello World  test", async (accounts) => {
  it("shoudl set a greeting", async() => {
    const instance = await HelloWorld.deployed();

    await instance.setGreeting("Hello world");

    const greeting = await instance.getGreeting();

    assert.equal(greeting, "Hello world");
  })
})