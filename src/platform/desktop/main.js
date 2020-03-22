const { app, BrowserWindow } = require("electron");

function createWindow() {
	// Cree la fenetre du navigateur.
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	// and load the index.html of the app.
	win.loadURL("http://localhost:3000/");
}

app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	// Sur macOS, il est commun pour une application et leur barre de menu
	// de rester active tant que l'utilisateur ne quitte pas explicitement avec Cmd + Q
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	// Sur macOS, il est commun de re-créer une fenêtre de l'application quand
	// l'icône du dock est cliquée et qu'il n'y a pas d'autres fenêtres d'ouvertes.
	if (win === null) {
		createWindow();
	}
});