function analyzeComplexity() {
    const codeInput = document.getElementById('code-input').value;
    const result = document.getElementById('result');

    if (codeInput.includes('for') || codeInput.includes('while')) {
        if (codeInput.match(/for/g).length === 1) {
            result.textContent = 'Time Complexity: O(n)';
        } else if (codeInput.match(/for/g).length > 1) {
            result.textContent = 'Time Complexity: O(n^2) or higher (nested loops detected)';
        } else {
            result.textContent = 'Unable to determine exact complexity. Please check your input.';
        }
    } else if (codeInput.includes('sort') || codeInput.includes('mergeSort')) {
        result.textContent = 'Time Complexity: O(n log n)';
    } else {
        result.textContent = 'Could not determine the complexity. Ensure the code is provided correctly.';
    }
}
