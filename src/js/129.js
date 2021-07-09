if (window.matchMedia('(max-width: 767px)').matches) {
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (faqItem) {
    faqItem.querySelector('.faq-item__header').addEventListener('click', function (_ref) {
      var target = _ref.target;
      target.nextElementSibling.classList.toggle('expanded');
    });
  });
}