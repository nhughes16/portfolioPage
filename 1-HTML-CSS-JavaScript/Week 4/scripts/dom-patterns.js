function showPattern(){
    const colorsA = ['blue', 'darkBlue', 'cyan', 'aqua', 'aquamarine', 'azure', 'cadetblue', 'dodgerblue', 'deepskyblue'];

    let topPosition = 25;
    let leftPosition = 25;
    let width = 500;
    let height = 500;
    let radius = width / 2;
    let lastColor = -1;
    let randomColorIDX = -1;

    while(width > 10){
        do{
            randomColorIDX = Math.floor(Math.random() * colorsA.length);
        } while (randomColorIDX === lastColor)

        const newDiv = document.createElement('div');

        newDiv.style.top = topPosition + 'px';
        newDiv.style.left = leftPosition + 'px';
        newDiv.style.width = width + 'px';
        newDiv.style.height = height + 'px';
        newDiv.style.borderRadius = radius + 'px';
        newDiv.style.background = colorsA[randomColorIDX];

        document.body.appendChild(newDiv);
        
        topPosition += 10;
        leftPosition += 10;
        width -= 20;
        height -= 20;
        radius = width / 2;

        lastColor = randomColorIDX;
    }
}