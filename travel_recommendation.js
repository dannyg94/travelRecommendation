const btnSearch = document.getElementById('btnSearch');

function searchRecommendation() {
    const input = document.getElementById('recommendationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if (input.toLowerCase() == "beaches" || input.toLowerCase() == "beach"){
            recommendations = data.beaches
        }
        if (input.toLowerCase() == "temples" || input.toLowerCase() == "temple"){
            recommendations = data.temples
        }
        if (input.toLowerCase() == "countries" || input.toLowerCase() == "country"){
            recommendations = data.countries
        }
        console.log(recommendations)
        for (let i = 0; i < recommendations.length; i++) {
                resultDiv.innerHTML += `<h2>${recommendations[i].name}</h2>`;
                resultDiv.innerHTML += `<img src="${recommendations[i].imageUrl}" alt="hjh">`;

        }
     })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchRecommendation);