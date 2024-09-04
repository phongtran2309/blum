const fs = require('fs');

// Hàm để chuyển đổi chuỗi theo định dạng yêu cầu
function formatString(str) {
    const parts = str.split(':');
    if (parts.length !== 4) {
        throw new Error('Chuỗi không hợp lệ');
    }
    const ip = parts[0];
    const port = parts[1];
    const user = parts[2];
    const pass = parts[3];
    return `http://${user}:${pass}@${ip}:${port}`;
}

// Đọc nội dung file a.txt
fs.readFile('a.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Lỗi khi đọc file:', err);
        return;
    }

    // Tách các dòng trong file
    const lines = data.split('\n');

    // Chuyển đổi từng dòng và loại bỏ các dòng rỗng
    const formattedLines = lines
        .map(line => line.trim())
        .filter(line => line !== '') // Loại bỏ dòng trống
        .map(line => formatString(line)); // Chuyển đổi mỗi dòng

    // Ghi kết quả đã chuyển đổi vào file b.txt, mỗi kết quả trên một dòng
    fs.writeFile('b.txt', formattedLines.join('\n'), (err) => {
        if (err) {
            console.error('Lỗi khi ghi file:', err);
        } else {
            console.log('Đã ghi các chuỗi đã định dạng vào b.txt');
        }
    });
});
