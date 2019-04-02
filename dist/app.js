const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const path = require('path');
const url = require('url');
const {
    projectsProvider,
    viewsProvider,
    optionsProvider,
    typesProvider,
    unitsProvider,
    datasetsProvider
} = require('./providers');

let win;
app.on('ready', () => {
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
    win = new BrowserWindow({
        title: 'Curve',
        show: false,
        backgroundColor: '#eaeaea',
        autoHideMenuBar: true,
        width,
        height,
        icon: path.join(__dirname, 'Curve/assets/img/icon.png')
    });
    //win.setMenu(null);
    win.maximize();
    const viewURL = url.format({
        pathname: path.join(__dirname, 'Curve', 'index.html'),
        protocol: 'file:',
        slashes: true
    });
    win.loadURL(viewURL);
    win.once('ready-to-show', () => win.show());
    win.on('closed', () => win = null);
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

// Projects Control
ipcMain.on('fetch-projects', () => {
    projectsProvider.getAll()
        .then(projects => win.webContents.send('projects-fetched', projects))
        .catch(console.log);
});
ipcMain.on('fetch-project', (event, id, includes) => {
    projectsProvider.getProject(id, includes)
        .then(project => win.webContents.send('project-fetched', project))
        .catch(console.log);
});
ipcMain.on('create-project', (event, project) => {
    projectsProvider.create(project)
        .then(project => win.webContents.send('project-created', project))
        .catch(console.log);
});
ipcMain.on('delete-project', (event, id) => {
    projectsProvider.delete(id)
        .then(() => win.webContents.send('project-deleted'))
        .catch(console.log);
});
ipcMain.on('update-project', (event, project) => {
    projectsProvider.update(project)
        .then(project => win.webContents.send('project-updated', project))
        .catch(console.log);
});
ipcMain.on('search-projects', (event, term) => {
    projectsProvider.search(term)
        .then(projects => win.webContents.send('projects-searched', projects))
        .catch(console.log);
});

// Views Control
ipcMain.on('fetch-views', (event, projectId) => {
    viewsProvider.getAll(projectId)
        .then(views => win.webContents.send('views-fetched', views))
        .catch(console.log);
});
ipcMain.on('fetch-view', (event, id) => {
    viewsProvider.get(id)
        .then(view => win.webContents.send('view-fetched', view))
        .catch(console.log);
});
ipcMain.on('create-view', (event, view, createOptions) => {
    viewsProvider.create(view, createOptions)
        .then(view => win.webContents.send('view-created', view))
        .catch(console.log);
});
ipcMain.on('delete-view', (event, id) => {
    viewsProvider.delete(id)
        .then(() => win.webContents.send('view-deleted'))
        .catch(console.log);
});
ipcMain.on('update-view', (event, view) => {
    viewsProvider.update(view)
        .then(newView => win.webContents.send('view-updated', newView))
        .catch(console.log);
});

// Types control
ipcMain.on('fetch-types', (event) => {
    typesProvider.getAll()
        .then(types => win.webContents.send('types-fetched', types))
        .catch(console.log);
});
ipcMain.on('fetch-type', (event, name) => {
    typesProvider.get(name)
        .then(type => win.webContents.send('type-fetched', type))
        .catch(console.log);
});
ipcMain.on('create-type', (event, type) => {
    typesProvider.create(type)
        .then(type => win.webContents.send('type-created', type))
        .catch(console.log);
});
ipcMain.on('create-types', (event, types) => {
    typesProvider.bulkCreate(types)
        .then(types => win.webContents.send('types-created', types))
        .catch(console.log);
});

// Units control
ipcMain.on('fetch-units', (event) => {
    unitsProvider.getAll()
        .then(units => win.webContents.send('units-fetched', units))
        .catch(console.log);
});
ipcMain.on('create-unit', (event, unit) => {
    unitsProvider.create(unit)
        .then(unit => win.webContents.send('unit-created', unit))
        .catch(console.log);
});

// Datasets control
ipcMain.on('create-dataset', (event, dataset) => {
    datasetsProvider.create(dataset)
        .then(dataset => win.webContents.send('dataset-created', dataset))
        .catch(console.log);
});
ipcMain.on('create-datasets', (event, datasets) => {
    datasetsProvider.bulkCreate(datasets)
        .then(() => win.webContents.send('datasets-created'))
        .catch(console.log);
});
ipcMain.on('delete-dataset', (event, id) => {
    datasetsProvider.delete(id)
        .then(() => win.webContents.send('dataset-deleted'))
        .catch(console.log);
});
ipcMain.on('update-datasets', (event, datasets) => {
    datasetsProvider.bulkUpdate(datasets)
    win.webContents.send('datasets-updated');
});

// Options control
ipcMain.on('update-options', (event, options) => {
    optionsProvider.update(options)
    win.webContents.send('options-updated');
});
ipcMain.on('create-options', (event, options) => {
    optionsProvider.create(options)
    win.webContents.send('options-created', options);
});