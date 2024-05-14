function reverseVowels(str) {
    const vowels = str.replace(/[^aeiuo]/gi, '').split('');
    return str.replace(/[aeiuo]/gi, _ => vowels.pop());
}