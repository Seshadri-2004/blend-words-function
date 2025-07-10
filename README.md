# Blend Words Function

This JavaScript function `blendWords` takes two words and combines them with smart overlap handling.

## Function Behavior

- If either word is empty, return the other word.
- If both words are empty, return an empty string.
- If the last character of the first word matches the first character of the second word, it avoids duplicating that character during the merge.

## Example

```javascript
blendWords("code", "editor"); // "codeitor"
blendWords("read", "day");    // "readay"
blendWords("a", "apple");     // "apple"
blendWords("", "hello");      // "hello"
blendWords("start", "");      // "start"
blendWords("", "");           // ""
```

## Usage

You can run this function in any modern JavaScript environment or browser console.
