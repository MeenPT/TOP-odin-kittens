// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('notice-alert-close');
    const alertDiv = document.getElementById('notice-alert');
  
    if (closeButton && alertDiv) {
      closeButton.addEventListener('click', function () {
        alertDiv.remove(); // Removes the alert div from the DOM
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const closeButton = document.getElementById('alert-alert-close');
    const alertDiv = document.getElementById('alert-alert');
  
    if (closeButton && alertDiv) {
      closeButton.addEventListener('click', function () {
        alertDiv.remove(); // Removes the alert div from the DOM
      });
    }
  });
  