const apiKey = 'AIzaSyB03hGRjYBegADFLlAHwB6R9D64OzpgW2k';
const spreadsheetId = '1Yr24VQMoaOMlIj-wlONEiZ2i-D2_Dilc9zlgQmT1y0A';
const range = 'Blog!A2:C1000';  // Chỉnh sửa phạm vi theo nhu cầu của bạn

const container = document.querySelector('.container');
const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`;

fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let htmls = '';
        htmls = data.values.map(html => {
            return `<div class="blog-container">
                        <div class="blog-author">${html[2]} đã viết</div>
                        <div class="blog-content">${html[1]}</div>
                        <div class="blog-time">vào: ${html[0]}</div>
                    </div>`
        });
        console.log(htmls);
        container.innerHTML = htmls.join('');
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
