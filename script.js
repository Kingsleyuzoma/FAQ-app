
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click' , () => {
       const content = header.nextElementSibling;
       
       //Close other open items
       document.querySelectorAll('.accordion-content').forEach(c => {
        if (c !== content) c.style.display = 'none';
       });

       //Toggle this one
       if (content.style.display === 'block') {
        content.style.display = 'none';

       } else {
        content.style.display = 'block';
       }
    });
});