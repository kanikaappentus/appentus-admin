document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-button');
     const contentDivs = document.querySelectorAll('.content');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
      
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-[#00ADEE]', 'text-white');
                btn.classList.add('bg-[#F4F8FA]');
            });

            this.classList.remove('bg-[#F4F8FA]');
            this.classList.add('bg-[#00ADEE]', 'text-white');

          
            const value = this.getAttribute('data-value');

            
            showContent(value);
        });
    })
    function showContent(value) {
        contentDivs.forEach(div => {
            div.classList.add('hidden');
        });

        const content = document.getElementById(`${value}-content`);
        if (content) {
            content.classList.remove('hidden');
        }
    }
});