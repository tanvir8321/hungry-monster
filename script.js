// search funtion call api and display desire searched data.
const search = value => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res => res.json())
        .then(data => {
            if (data.meals) {
                const mealDelail = document.getElementById("meal-details");
                mealDelail.style.display = "none";
                const mealContainer = document.getElementById('meal-container');
                mealContainer.innerHTML = '';
                data.meals.forEach(food => {

                    const mealDiv = document.createElement('div');
                    const mealContent = `
                        <a href="#meal-details">
                            <div onclick="showMeal(${food.idMeal})" class="meal">
                                <img src="${food.strMealThumb}" alt="">
                                <p>${food.strMeal}</p>
                            </div>
                        </a>
                    `
                    mealDiv.innerHTML = mealContent;
                    mealContainer.appendChild(mealDiv);

                });


            } else {
                const mealContainer = document.getElementById('meal-container');
                const mealContent = `
                        <div class="meal">
                            <img src="images/404.png" alt="">
                        </div>
                    `
                mealContainer.innerHTML = mealContent;
            }
        });
}

// get value from user by input
const getInputValue = () => {
    return document.getElementById('search-input').value;
}

// on input handler :: when user some input value in search are, then onInputHandler will work that time
const onInputHandler = () => {
        const onInputSearch = getInputValue();
        search(onInputSearch);
    }
    // onClickHandler :: when user click on search button, then onClickHandler with work
const onClickHandler = () => {
    const onInputSearch = getInputValue();
    search(onInputSearch);
}

// when search have no value then show all foods
const inputValue = getInputValue();
if (!inputValue) {
    search(inputValue);
}

// showMeal function call a api by food id.
const showMeal = id => {
    const mealDelail = document.getElementById("meal-details");
    mealDelail.style.display = "block";
    // for clear previous search
    mealDelail.innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            const mealDetailContent = `
        <img src="${data.meals[0].strMealThumb}" alt="" srcset="">
        <h3>${data.meals[0].strMeal}</h3>
        <h4>Ingredients</h4>
        <ul>
            <li><i class="fas fa-check-square"></i> ${data.meals[0].strIngredient1}</li>
            <li><i class="fas fa-check-square"></i> ${data.meals[0].strIngredient2}</li>
            <li><i class="fas fa-check-square"></i> ${data.meals[0].strIngredient3}</li>
            <li><i class="fas fa-check-square"></i> ${data.meals[0].strIngredient4}</li>
            <li><i class="fas fa-check-square"></i> ${data.meals[0].strIngredient5}</li>
            <li><i class="fas fa-check-square"></i> ${data.meals[0].strIngredient6}</li>
        </ul>
        
        `;
            mealDelail.innerHTML = mealDetailContent;
        })

}