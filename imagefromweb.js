const images = document.querySelectorAll('img');
images.forEach((img, index) => {
    const url = img.src;
    if (url) {
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const a = document.createElement('a');
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = `image_${index + 1}`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            })
            .catch(err => console.error(`Failed to download image ${index + 1}:`, err));
    }
});
