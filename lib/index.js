module.exports = [
  {
    id: 'jupyterlab_ou_brand_extension',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension jupyterlab_ou_brand_extension is activated!'
      );
      console.log(app.commands);
    }
  }
];
