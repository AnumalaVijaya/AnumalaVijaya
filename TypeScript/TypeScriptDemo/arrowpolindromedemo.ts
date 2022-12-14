
let isPalindrome = (name:string) => {
  let midPoint = name.length / 2;
  for (let i = 0; i < midPoint && i < name.length; i++) {
    if (name[i] != name[name.length - 1 - i]) {
      console.log(" Not Palindrome");
      return;
    }
  }
  console.log("Palindrome");
}
isPalindrome("ete");