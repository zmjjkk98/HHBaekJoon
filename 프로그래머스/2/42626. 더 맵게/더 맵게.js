function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (const sco of scoville) {
    minHeap.enqueue(sco);
  }

  let mixedCount = 0;

  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.dequeue();
    const second = minHeap.dequeue();
    const mixedScov = first + second * 2;
    minHeap.enqueue(mixedScov);
    mixedCount++;
  }

  return minHeap.peek() >= K ? mixedCount : -1;
}

class MinHeap {
  constructor() {
    this.values = [];
  }

  size() {
    return this.values.length;
  }

  enqueue(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  dequeue() {
    if (this.values.length === 0) return null;
    if (this.values.length === 1) return this.values.pop();

    let min = this.values[0];
    let end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();
    return min;
  }

  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    const element = this.values[idx];

    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let left, right;
      let swap = null;

      if (leftChildIdx < length) {
        left = this.values[leftChildIdx];
        if (element > left) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        right = this.values[rightChildIdx];
        if (
          (swap != null && left > right) ||
          (swap === null && element > right)
        ) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (parent < element) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  peek() {
    return this.values[0];
  }
}
