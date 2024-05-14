function createPhoneNumber(numbers){
    const code = numbers.slice(0, 3).join('');
    const middle = numbers.slice(3, 6).join('');
    const end = numbers.slice(6, 10).join('');
  
    return `(${code}) ${middle}-${end}`;
}