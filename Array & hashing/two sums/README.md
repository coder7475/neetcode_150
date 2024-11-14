**Two Sums Problem**

**Problem Statement:**

Given an array of integers `nums` and an integer `target`, find the indices of the two numbers in the array that add up to `target`.

**Assumptions:**

- Each input has exactly one solution.
- You cannot use the same element twice.
- The answer can be returned in any order.

**Examples:**

1. **Input:** `nums = [2,7,11,15]`, `target = 9`
   **Output:** `[0,1]`
   **Explanation:** `nums[0] + nums[1] == 9`, so we return `[0, 1]`.

2. **Input:** `nums = [3,2,4]`, `target = 6`
   **Output:** `[1,2]`

3. **Input:** `nums = [3,3]`, `target = 6`
   **Output:** `[0,1]`

**Constraints:**

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

**Follow-up Question:**

Can you develop an algorithm with a time complexity less than O(n^2)?

**Interview Experience:**

Have you encountered this question in a real interview before?

- Yes
- No

**Statistics:**

- Accepted Submissions: 15.2M
- Total Submissions: 28M
- Acceptance Rate: 54.2%
