/**
 * @jest-environment jsdom
 */





const buttonClick = require('../button');

beforeEach(() => {
  document.body.innerHTML = "<p id='par'>Hello World</p>";
});

describe("DOM tests", () => {
  test("should change the text of the paragraph", () => {
    buttonClick();
    expect(document.getElementById('par').innerText).toBe("Hello Jest");
  });
});