const SetValue = artifacts.require("SetValue");

contract("Set Value  test", async (accounts) => {
  it("set value", async() => {
    const instance = await SetValue.deployed();

    await instance.increase();
    await instance.increase();
    await instance.increase();
    await instance.increase();

    await instance.setGreeting("Hello world");

    const greeting = await instance.getGreeting();
    const _greeting = await instance._greeting();

    assert.equal(greeting, "Hello world");
    assert.equal(_greeting, "Hello world");
  })
})