 document.addEventListener("DOMContentLoaded", function() {
        const maxScore = document.querySelectorAll('.summary__table-row-max-score')

        async function fetchData() {
            try {
                const response = await fetch('data.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                updateContainer(data);
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        }
        function updateContainer(data) {
            maxScore.forEach((element,index) => {
                element.textContent = data[index].score
            })
        }
        fetchData();
    });
