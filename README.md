# effect-counter
A simple **React counter application** that allows users to increase, decrease, and reset a counter value. It also logs the counter value to the console whenever it changes.

# Features 🚀

✅ Increase counter value by clicking the Increase Count button.

✅ Decrease counter value by clicking the Decrease Count button.

✅ Reset counter value to zero with the Reset button.

✅ Console logs the counter value on every update using useEffect.


# Technologies Used 🛠️

* React (Hooks: useState, useEffect)
* JavaScript (ES6+)
* CSS (for styling)

# Installation & Setup ⚙️

* Clone the repository:

  git clone https://github.com/your-username/counter-app.git

  cd counter-app

* Install dependencies:
  
  npm install

* Start the development server:

  npm start

Open your browser and visit http://localhost:300


# Understanding the useEffect Hook 🔍

**The useEffect hook is used in this project to log the counter value whenever it changes:**


useEffect(() => {

  console.log("Counter:", counterValue);
  
}, [counterValue]);

**What Happens if We Don't Provide Dependencies?**


**If we omit the dependency array ([]), useEffect runs on every re-render. This may lead to performance issues.**

useEffect(() => {

  console.log("Counter:", counterValue);
  
});


**If we provide an empty dependency array [], useEffect runs only once, when the component mounts.**

useEffect(() => {

  console.log("Component Mounted");
  
}, []);

**If we include specific dependencies, such as [counterValue], the effect runs only when those dependencies change (best practice to prevent unnecessary executions).**








