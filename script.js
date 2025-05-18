    // Example fixed rates for demo. In production, fetch from an API.
    const rates = {
      USD: { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.1 },
      EUR: { USD: 1.09, EUR: 1, GBP: 0.86, INR: 90.4 },
      GBP: { USD: 1.27, EUR: 1.16, GBP: 1, INR: 105.2 },
      INR: { USD: 0.012, EUR: 0.011, GBP: 0.0095, INR: 1 }
    };

    function convert() {
      const amount = parseFloat(document.getElementById('amount').value);
      const from = document.getElementById('from').value;
      const to = document.getElementById('to').value;
      const resultDiv = document.getElementById('result');
      if (isNaN(amount) || amount < 0) {
        resultDiv.textContent = "Please enter a valid amount.";
        resultDiv.style.color = "#f08c7d";
        return;
      }
      if (from === to) {
        resultDiv.textContent = "Choose different currencies to convert.";
        resultDiv.style.color = "#f08c7d";
        return;
      }
      const rate = rates[from][to];
      const converted = (amount * rate).toFixed(2);
      resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
      resultDiv.style.color = "#3bb273";
    }

    document.getElementById('convertBtn').onclick = convert;

    document.getElementById('swapBtn').onclick = function() {
      const fromSel = document.getElementById('from');
      const toSel = document.getElementById('to');
      const temp = fromSel.value;
      fromSel.value = toSel.value;
      toSel.value = temp;
      convert();
    };

    // Optional: Enter key triggers convert
    document.getElementById('amount').addEventListener('keyup', function(e) {
      if (e.key === 'Enter') convert();
    });
