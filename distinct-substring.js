/**
  Count of substrings of length K with exactly K distinct characters
  Given string str of the lowercase alphabet and an integer K, the task is to count all substrings of length K 
  which have exactly K distinct characters.

  Example:
  Input: str = "abcc", K = 2
  Output: 2
  Explanation:
  Possible substrings of length K = 2 are
  ab : 2 distinct characters
  bc : 2 distinct characters
  cc : 1 distinct character
  Only two valid substrings exist {"ab", "bc"}.
  Input: str = "aabab", K = 3
  Output: 0
  Explanation:
  Possi
  Possible substrings of length K = 3 are
  aab : 2 distinct characters
  aba : 2 distinct characters
  bab : 2 distinct characters
  No substrings of length 3 exist with exactly 3 distinct characters.
 */
function distinctSubstr(str, k) {
  let counter = 0;
  let substr;
  let distinctSet;
  for (let i = 0; i < str.length; i++) {
    substr = str.substr(i, k);
    distinctSet = new Set(substr)
    if (distinctSet.size === k) {
      counter++;
    }
  }
  // O(n)
  // O(n*k)
  return counter;
}