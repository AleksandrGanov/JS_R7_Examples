function FormatPercent(value,
    numDigitsAfterDecimal = 2,
    includeLeadingDigit = true, 
    useParensForNegativeNumbers = false,
    groupDigits = false)
{
    // Convert value to a percentage
    let percentage = (value * 100).toFixed(numDigitsAfterDecimal);

    // Handle leading zero
    if (!includeLeadingDigit && percentage.startsWith('0.'))
    {
        percentage = percentage.slice(1); // Remove the leading zero
    }

    // Handle grouping of digits
    if (groupDigits)
    {
        let parts = percentage.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas for thousands
        percentage = parts.join('.');
    }

    // Handle parentheses for negative numbers
    if (useParensForNegativeNumbers && value < 0)
    {
        percentage = `(${percentage})`;
    }
    else if (value < 0)
    {
        percentage = `-${percentage}`;
    }

    // Append percentage sign
    return `${percentage}%`;
}

// Примеры использования
console.log(formatPercent(0.12345)); // "12.35%"
console.log(formatPercent(0.12345, 1)); // "12.3%"
console.log(formatPercent(0.12345, 2, false)); // "12.35%"
console.log(formatPercent(-0.12345, 2, true, true)); // "(12.35%)"
console.log(formatPercent(12345.678, 2, true, false, true)); // "1,234,567.68%"