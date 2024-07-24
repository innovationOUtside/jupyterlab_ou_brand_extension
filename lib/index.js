module.exports = [
  {
    id: 'cdm_jupyterlab_brand_extension',
    autoStart: true,
    activate: function (app) {
      console.log(
        'JupyterLab extension cdm_jupyterlab_brand_extension is activated!'
      );
      console.log(app.commands);
    }
  }
];
