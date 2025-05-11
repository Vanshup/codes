document.getElementById('resultForm').addEventListener('submit', async function (e) {
        e.preventDefault();
            const data = {
                name: document.getElementById('name').value,
                prn: document.getElementById('prn').value,
                email: document.getElementById('email').value,
                class: document.getElementById('class').value,
                marks: {
                    subject1: +document.getElementById('sub1').value,
                    subject2: +document.getElementById('sub2').value,
                    subject3: +document.getElementById('sub3').value,
                    subject4: +document.getElementById('sub4').value,
                    subject5: +document.getElementById('sub5').value
                }
            };
            await fetch('/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
                alert('Result Saved!');
    location.reload();
});

async function loadResults() {
    const res = await fetch('/results');
    const data = await res.json();
    const container = document.getElementById('results');
    container.innerHTML = '';
        data.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<b>${item.name}</b> (${item.prn}) - ${item.class} - ${item.email} - Marks: ${Object.values(item.marks).join(', ')}`;
        container.appendChild(div);
    });
}
loadResults();
