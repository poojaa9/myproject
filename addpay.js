// Address page: Get product details and store them
if (window.location.pathname.includes('address.html')) {
    const product = localStorage.getItem('selectedProduct');
    const price = localStorage.getItem('productPrice');
    
    if (product && price) {
      // Display product details
      alert(`You are buying: ${product} for $${price}`);
    }
  }
  
  // Handle Address Form Submission
  const addressForm = document.getElementById('address-form');
  if (addressForm) {
    addressForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Save the address details and redirect to payment page
      localStorage.setItem('address', JSON.stringify({
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        zip: document.getElementById('zip').value
      }));
      
      window.location.href = 'payment.html';
    });
  }
  
  // Handle Payment Form Submission
  const paymentForm = document.getElementById('payment-form');
  if (paymentForm) {
    paymentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      alert('Payment Successful! Thank you for your purchase.');
      // Redirect to confirmation page or home
      window.location.href = 'shopping.html';
    });
  }
  