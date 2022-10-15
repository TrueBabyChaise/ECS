// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.

const { ipcRenderer } = require('electron')
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const canvasHeightPrct = 0.7
const canvasWidthPrct = 1

ctx.imageSmoothingEnabled = false;

document.getElementById('minimizeBtn').addEventListener('click', () => {
    ipcRenderer.send('minimizeApp');
});

document.getElementById('maxMinBtn').addEventListener('click', () => {
    ipcRenderer.send('maxMinApp');
});

document.getElementById('closeBtn').addEventListener('click', () => {
    ipcRenderer.send('closeApp');
});


function updateState(glhf: GLHF, state: LevelState) : void {
    
}

window.onload = () => {

    let glhf = new GLHF()
    let scene = new Scene()
    let entity = scene.addEntity("Test").addComponent(new PositionComponent(new Vector3()))

    let a = entity.getComponent(PositionComponent) as PositionComponent
    
    glhf.addSystem(new ConsolePrintSystem(glhf, "Hoya !"))
    glhf.changeScene(scene)
    glhf.run(updateState, new LevelState())
}
