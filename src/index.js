function kthLargest(nums, k) {
    return nums.sort((a, b) => b - a)[k - 1];
}

// Test
console.log(kthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(kthLargest([3, 2, 1, 5, 6, 4], 3)); // 4
console.log(kthLargest([3, 2, 1, 5, 6, 4], 6)); // 1
```

```javascript
function kthLargest(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
}

function quickSelect(nums, low, high, k) {
    if (low === high) return nums[low];
    let pivotIndex = partition(nums, low, high);
    if (k === pivotIndex) return nums[k];
    else if (k < pivotIndex) return quickSelect(nums, low, pivotIndex - 1, k);
    else return quickSelect(nums, pivotIndex + 1, high, k);
}

function partition(nums, low, high) {
    let pivot = nums[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (nums[j] > pivot) {
            i++;
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
    }
    [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]];
    return i + 1;
}

// Test
console.log(kthLargest([3, 2, 1, 5, 6, 4], 2)); // 5
console.log(kthLargest([3, 2, 1, 5, 6, 4], 3)); // 4
console.log(kthLargest([3, 2, 1, 5, 6, 4], 6)); // 1
