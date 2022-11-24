const { getHumanResponse } = require('../messages.js');

describe('test getHumanResponse', () => {
  it('should return bar for foo', () => {
    const result = getHumanResponse("foo");
    expect(result).toEqual("bar");
  });

  it('should return You\'re welcome for Thank you', () => {
    const result = getHumanResponse("Thank you");
    expect(result).toEqual("You're welcome");
  });

  it('should not return You\'re welcome for thank you', () => {
    const result = getHumanResponse("thank you");
    expect(result).not.toEqual("You're welcome");
  });

  it('should return I am good, thanks! for How are you?', () => {
    const result = getHumanResponse("How are you?");
    expect(result).toEqual("I am good, thanks!");
  });

  it('should return default message for empty message', () => {
    const result = getHumanResponse("");
    expect(result).toEqual("I do not know how to answer!");
  });

  it('should return not known message for empty message', () => {
    const result = getHumanResponse("Invalid message");
    expect(result).toEqual("I do not know how to answer!");
  });
});
