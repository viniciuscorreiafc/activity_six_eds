const getHumanResponse = (message) => {
  if (message === "foo") {
    return "bar";
  }
  if (message === "Thank you") {
    return "You're welcome";
  }
  if (message === "How are you?") {
    return "I am good, thanks!";
  }
  return "I do not know how to answer!";
}

module.exports = {
  getHumanResponse,
}