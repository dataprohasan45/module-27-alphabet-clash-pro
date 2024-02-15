function play(){
    // jokon home page e play now a click kora hobe tokon sei page ta hide hoye jabe and second page ta open hoye jabe mane play ground ta on hoye jabe
    const homeSection = document.getElementById('home-screen');
    // id dia kuje tarpor oitar moddy hidden naam er ekta class add kore dile section ta hidden hoye jabe
    homeSection.classList.add('hidden');
    // same vave jodi second page k hidden class ta k  remove  korate chai tahole add remove korte hobe tahole second page ta show korbe

    const secondSection = document.getElementById('play-ground');
    secondSection.classList.remove('hidden');
}