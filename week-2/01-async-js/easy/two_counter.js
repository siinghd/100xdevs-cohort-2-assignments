const timer = () => {
    console.clear();
    console.log(new Date().toLocaleTimeString())
    setTimeout(timer,1000)
};

timer()