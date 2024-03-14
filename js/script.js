const openModel = document.getElementById('open');
const closeModel = document.getElementById('close');
const model = document.getElementById('model');
const mask = document.getElementById('mask');
const showKeyframes = {
    opacity: [0, 1],
    visibility: 'visible',
};
const hideKeyframes = {
    opacity: [1, 0],
    visibility: 'hidden',
};
const options = {
    duration: 800,
    easing: 'ease',
    fill: 'forwards',
};    

//①openをクリックしたら
//②maskとmodelが表示される
openModel.addEventListener('click', () => {
    model.animate(showKeyframes, options);
    mask.animate(showKeyframes, options);
});

//③closeをクリックしたら
//④元に戻る
closeModel.addEventListener('click', () => {
    model.animate(hideKeyframes, options);
    mask.animate(hideKeyframes, options);
});

mask.addEventListener('click', () => {
    closeModel.click();
})