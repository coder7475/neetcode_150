struct Solution; 

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut hashmap = std::collections::HashMap::new();

        for (i, &val) in nums.iter().enumerate() {
            let diff = target - val;
            if let Some(&j) = hashmap.get(&diff) {
                return vec![j as i32, i as i32];
            }
            hashmap.insert(val, i);
        }
        vec![]
    }
}

fn main() {
    let nums = vec![2, 7, 11, 15];
    let target = 9;
    let result = Solution::two_sum(nums, target);
    println!("{:?}", result);
}
