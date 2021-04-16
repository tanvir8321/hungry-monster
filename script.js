
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
                            <div class="meal">
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