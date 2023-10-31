function solution(number) {
    let result = '';
    const romanNumbers = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    let count = 0;
    while(number !== 0) {
        let remainder = number % 10;

        if (remainder >= 1 && remainder <= 3) result = romanNumbers[count].repeat(remainder) + result;
        if (remainder === 4) result = romanNumbers[count] + romanNumbers[count + 1] + result;
        if(remainder >= 5 && remainder <= 8) result = romanNumbers[count + 1] + romanNumbers[count].repeat(remainder - 5) + result;
        if(remainder === 9) result = romanNumbers[count] + romanNumbers[count + 2] + result;

        count += 2;
        number = Math.floor(number / 10);
    }

    return result;
  }