const message = "Hello world"; // Try edit me

// Log to console
console.log(message);

const inVal = "a2bc3def45ghijk8510";

function check(input) {
    console.log(input);
    let alpha = [];
    let nums = [];

    for (let i = 0; i < input.length + 1; i++) {
        if (input.length === i) {
            return { alpha, nums };
        }

        if (isNaN(parseInt(input[i]))) {
            if (isNaN(parseInt(input[i - 1])) && nums.length < alpha.length) {
                alpha[alpha.length - 1] += input[i];
                continue;
            }
            alpha.push(input[i]);
        }

        if (!isNaN(parseInt(input[i]))) {
            if (!isNaN(parseInt(input[i - 1])) && alpha.length === nums.length) {
                nums[nums.length - 1] += input[i];
                continue;
            }
            nums.push(input[i]);
        }
    }
}
