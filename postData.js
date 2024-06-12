document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('email')) {
        // Phần này sẽ xử lí submit blog
        const contentContainer = document.querySelector('.ck.ck-content.ck-editor__editable');
        const submitBtn = document.querySelector('.submit-btn');
        const currentEmail = document.querySelector('.current-email');
        currentEmail.textContent = localStorage.getItem('email');
        //================================
        
        function generateRandomId() {
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var id = '@e';
            
            for (var i = 0; i < 4; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            
            return id;
        }

        function submitData() {
            const url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-uDq28GET9JqxeXAcW52WbkPovJ5lD6k_7d7GoUCu6Jcksw/formResponse`;
            const fieldEmail = `entry.2141668223`;
            const fieldContent = `entry.232884688`;
            const fieldId = `entry.274446712`;

            const formData = new FormData();
            
            const blogId = generateRandomId();
            const contentValue = contentContainer.innerHTML;
            console.log(contentValue);
            formData.append(fieldEmail, localStorage.getItem('email'));
            formData.append(fieldContent, contentValue);
            formData.append(fieldId, blogId);

            fetch(url, {
                method: 'POST',
                mode: 'no-cors',
                body: formData,
            }).then(() => {
                console.log('Data submitted successfully');
            }).catch((error) => {
                console.error('Error submitting data:', error);
            });
        }

        submitBtn.addEventListener('click', function(e) {
            submitData();
            window.location.href = './blog.html';
        });
        window.addEventListener('beforeunload', () => {
            localStorage.removeItem('email');
        })

        window.addEventListener('unhandledrejection', function (event) {
            console.error('Unhandled rejection:', event.reason);
            // Reload trang sau 1 giây để tránh loop reload liên tục
            setTimeout(function () {
                location.reload();
            }, 1000);
        });

    } else {
        window.location.href = './index.html'
    }
    
});
