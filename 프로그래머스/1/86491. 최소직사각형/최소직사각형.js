function solution(sizes) {
  let maxHeight = 0;
  let maxWidth = 0;

  sizes.forEach(([width, height]) => {
    const maxLen = Math.max(width, height);
    const minLen = Math.min(width, height);

    maxWidth = Math.max(maxLen, maxWidth);
    maxHeight = Math.max(minLen, maxHeight);
  });

   return maxHeight * maxWidth;
}