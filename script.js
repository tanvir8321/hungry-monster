
// search funtion call api and display desire searched data.
const search = value => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
        .then(res => res.json())
        .then(data => {
            if (data.meals) {
                const mealContainer = document.getElementById('meal-container');
                mealContainer.innerHTML = '';
                data.meals.forEach(food => {
                    
                    const mealDiv = document.createElement('div');
                    const mealContent = `
                            <div onclick="showMeal(${food.idMeal})" class="meal">
                                <img src="${food.strMealThumb}" alt="">
                                <p>${food.strMeal}</p>
                            </div>
                    `
                    mealDiv.innerHTML = mealContent;
                    mealContainer.appendChild(mealDiv);
                    
                });
                

            } else {
                const mealContainer = document.getElementById('meal-container');
                const mealContent = `
                        <div class="meal">
                            <p>Not found....</p>
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

const inputValue = getInputValue();
if (!inputValue) {
    search(inputValue);
}

const showMeal = id => {
    const mealDelail = document.getElementById("meal-details");
    mealDelail.style.display = "block";
    mealDelail.innerHTML = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.meals[0]);
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

// const mealContainerMeal = document.getElementById('meal-container');
// console.log(mealContainerMeal)
// mealContainerMeal.


// const search = () => {

//     const searchValue = document.getElementById("search-input").value;

//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
//         .then(res => res.json())
//         .then(data => displayFood(data.meals));


//     const mealContainer = document.getElementById("meal-container");
//     const displayFood = foods => {
//         if (foods) {
//             foods.forEach(food => {
//                 const mealValue =
//                     `<a href="">
//                        <div class="meal">
//                            <img src="${food.strMealThumb}" alt="">
//                            <p>${food.strMeal}</p>
//                        </div>
//                    </a>`;
//                 mealContainer.innerHTML = mealValue;
//             });
//         } else {
//             const mealContainer = document.getElementById("meal-container");
//             const li = document.createElement('li');
//             li.innerText = 'Sorry not found your meal...';
//             mealContainer.appendChild(li);
//         }
//     }
// }


// const searchValue = '';

// fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
//     .then(res => res.json())
//     .then(data => displayFood(data.meals));


// const mealContainer = document.getElementById("meal-container");
// let mealValue = '';
// const displayFood = foods => {
//     if (foods) {
//         foods.forEach(food => {
//             mealValue +=
//                 `<a href="">
//                    <div class="meal">
//                        <img src="${food.strMealThumb}" alt="">
//                        <p>${food.strMeal}</p>
//                    </div>
//                </a>`;
//             mealContainer.innerHTML = mealValue;
//         });
//     } else {
//         const mealContainer = document.getElementById("meal-container");
//         const li = document.createElement('li');
//         li.innerText = 'Sorry not found your meal...';
//         mealContainer.appendChild(li);
//     }
// }